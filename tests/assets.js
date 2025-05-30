#!/usr/bin/env node
/**
 * assetRegistryTextConverter.js
 *
 * Convert Unreal Engine's DumpAssetRegistry txt dumps back into a valid AssetRegistry.bin
 *
 * Usage:
 *   node assetRegistryTextConverter.js \
" + 
" *     --binheader <original AssetRegistry.bin> \
" +
" *     --paths <Page_00000.txt> \
" +
" *     --tags <Page_00001.txt>    \
" +
" *     --out <NewAssetRegistry.bin>
 */

const fs = require('fs');
const path = require('path');

/**
 * Simple buffer-based writer for little-endian primitives
 */
class BufferWriter {
  constructor() { this.chunks = []; }
  writeBytes(buf)    { this.chunks.push(buf); }
  writeInt32(v)      { const b = Buffer.alloc(4); b.writeInt32LE(v);    this.chunks.push(b); }
  writeUInt32(v)     { const b = Buffer.alloc(4); b.writeUInt32LE(v);   this.chunks.push(b); }
  toBuffer()         { return Buffer.concat(this.chunks); }
}

/**
 * Parse header from original AssetRegistry.bin to preserve GUID and version fields
 */
function parseHeader(binPath) {
  const buf = fs.readFileSync(binPath);
  return {
    guidBuf:                buf.slice(0,16),
    latest_version:         buf.readInt32LE(16),
    filter_editor_only_data: Boolean(buf.readUInt32LE(20)),
    asset_registry_file_version: buf.readInt32LE(24)
  };
}

/**
 * Extract object paths between dump markers in Page_00000.txt
 */
function parsePaths(txtPath) {
  const lines = fs.readFileSync(txtPath, 'utf8').split(/\r?\n/);
  const paths = [];
  let inSection = false;
  for (const line of lines) {
    if (line.startsWith('--- Begin CachedAssetsByObjectPath')) {
      inSection = true;
      continue;
    }
    if (inSection) {
      if (line.startsWith('--- End CachedAssetsByObjectPath')) break;
      const trimmed = line.trim();
      if (trimmed.startsWith('/')) {
        paths.push(trimmed);
      }
    }
  }
  return paths;
}

/**
 * Extract per-asset tag maps between dump markers in Page_00001.txt
 */
function parseTags(txtPath) {
  const lines = fs.readFileSync(txtPath, 'utf8').split(/\r?\n/);
  const tagsByPath = {};
  let inSection = false;
  let currentPath = null;

  for (const line of lines) {
    if (line.startsWith('--- Begin AssetTags')) {
      inSection = true;
      continue;
    }
    if (inSection) {
      if (line.startsWith('--- End AssetTags')) break;
      const trimmed = line.trim();
      if (trimmed.startsWith('/')) {
        currentPath = trimmed;
        tagsByPath[currentPath] = {};
      } else if (currentPath && trimmed.includes(':')) {
        const [key, ...rest] = trimmed.split(':');
        const value = rest.join(':').trim();
        tagsByPath[currentPath][key.trim()] = value;
      }
    }
  }
  return tagsByPath;
}

/**
 * Build and write new AssetRegistry.bin from parsed header and assets array
 */
function buildRegistry(header, assets, outPath) {
  const writer = new BufferWriter();

  // 1) GUID + versions + filter + file version + count
  writer.writeBytes(header.guidBuf);
  writer.writeInt32(header.latest_version);
  writer.writeUInt32(header.filter_editor_only_data ? 1 : 0);
  writer.writeInt32(header.asset_registry_file_version);
  writer.writeInt32(assets.length);

  // 2) Name pool map for FName indices
  const nameMap = new Map();
  function getNameIdx(name) {
    if (!nameMap.has(name)) nameMap.set(name, nameMap.size + 1);
    return nameMap.get(name);
  }

  // 3) Serialize each FAssetData (object path, package, path, name, class)
  for (const a of assets) {
    [a.object_path, a.package_name, a.package_path, a.asset_name, a.asset_class]
      .forEach(n => writer.writeInt32(getNameIdx(n)));

    // tags
    const tagKeys = Object.keys(a.tags || {});
    writer.writeInt32(tagKeys.length);
    for (const key of tagKeys) {
      writer.writeInt32(getNameIdx(key));
      writer.writeInt32(getNameIdx(a.tags[key]));
    }

    // no chunk IDs in text dump format
    writer.writeInt32(0);
    // default package flags = 0
    writer.writeUInt32(a.package_flags || 0);
  }

  // 4) Write name-batch table
  writer.writeInt32(nameMap.size);
  for (const [str, idx] of nameMap) {
    writer.writeInt32(idx);
    const buf = Buffer.from(str, 'utf8');
    writer.writeInt32(buf.length);
    writer.writeBytes(buf);
  }

  // ensure output directory
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, writer.toBuffer());
}

/** CLI entrypoint **/
function main() {
  const args = process.argv.slice(2);
  let binHeaderPath, pathsTxt, tagsTxt, outBin;
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--binheader': binHeaderPath = args[++i]; break;
      case '--paths':     pathsTxt    = args[++i]; break;
      case '--tags':      tagsTxt     = args[++i]; break;
      case '--out':       outBin      = args[++i]; break;
    }
  }
  if (!binHeaderPath || !pathsTxt || !tagsTxt || !outBin) {
    console.error('Usage: node assetRegistryTextConverter.js \
' +
                  '  --binheader <original.bin> --paths <Page_00000.txt> \
' +
                  '  --tags <Page_00001.txt> --out <NewAssetRegistry.bin>');
    process.exit(1);
  }

  const header = parseHeader(binHeaderPath);
  const paths  = parsePaths(pathsTxt);
  const tags   = parseTags(tagsTxt);

  // Assemble minimal FAssetData array
  const assets = paths.map(p => {
    const pkgName = p.substring(0, p.lastIndexOf('.'));
    const pkgPath = pkgName.substring(0, pkgName.lastIndexOf('/'));
    const assetName = p.substring(p.lastIndexOf('.') + 1);
    const tagMap = tags[p] || {};
    return {
      object_path: p,
      package_name: pkgName,
      package_path: pkgPath,
      asset_name: assetName,
      asset_class: tagMap['Class'] || '',
      tags: tagMap,
      package_flags: 0
    };
  });

  buildRegistry(header, assets, outBin);
  console.log(`Wrote new AssetRegistry.bin to ${outBin}`);
}

main();