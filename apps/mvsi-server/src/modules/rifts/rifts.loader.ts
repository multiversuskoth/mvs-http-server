import { DataAssetModel } from "@mvsi/database/models/DataAssets";
import { connect } from "@mvsi/database/papr";
import { readdir, readFile } from "fs/promises";
import { extname, join } from "path";


await connect()

interface SlugIndexRow {
  Slug: string;
  SoftObjectPath: {
    AssetPathName: string;
    SubPathString: string;
  };
}

interface SlugIndexFile {
  Rows: Record<string, SlugIndexRow>;
}

import type { CharacterDataList } from "./rfits.types";

interface WeightedCharacterSet {
  Properties: {
    Slug?: string;
    CharacterDataList?: CharacterDataList;
    HydraName?: string;
  };
  Name?: string;
}

// Build slug to assetPath lookup from all SlugIndex files
async function loadSlugIndexLookup(): Promise<Map<string, string>> {
  const slugToAssetPath = new Map<string, string>();
  const slugIndexDir = join(process.cwd(), "apps/mvsi-server/src/data/SlugIndex");

  try {
    const files = await readdir(slugIndexDir);
    const jsonFiles = files.filter((file) => extname(file) === ".json");

    console.log(`Loading ${jsonFiles.length} SlugIndex files...`);

    for (const file of jsonFiles) {
      try {
        const filePath = join(slugIndexDir, file);
        const content = await readFile(filePath, "utf-8");
        const data: SlugIndexFile[] = JSON.parse(content);

        for (const item of data) {
          if (item.Rows) {
            for (const row of Object.values(item.Rows)) {
              if (row.Slug && row.SoftObjectPath?.AssetPathName) {
                // Store slug -> assetPath mapping (lowercase slug for case-insensitive lookup)
                const slugLower = row.Slug.toLowerCase();
                if (!slugToAssetPath.has(slugLower)) {
                  slugToAssetPath.set(slugLower, row.SoftObjectPath.AssetPathName);
                }
              }
            }
          }
        }
      } catch (error) {
        console.error(`Error loading ${file}:`, error);
      }
    }

    console.log(`Loaded ${slugToAssetPath.size} slug mappings from SlugIndex files`);
    return slugToAssetPath;
  } catch (error) {
    console.error("Error reading SlugIndex directory:", error);
    throw error;
  }
}

// Recursively find all JSON files in a directory
async function findJsonFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Recursively search subdirectories
      const subFiles = await findJsonFiles(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile() && extname(entry.name) === ".json") {
      files.push(fullPath);
    }
  }

  return files;
}

// Extract slug from WeightedCharacterSet JSON
function extractSlug(data: WeightedCharacterSet[]): string | null {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const firstItem = data[0];
  // Try Properties.Slug first
  if (firstItem.Properties?.Slug) {
    return firstItem.Properties.Slug;
  }
  // Fall back to Name property
  if (firstItem.Name) {
    return firstItem.Name;
  }
  return null;
}

// Load and insert WeightedCharacterSets
export async function loadWeightedCharacterSets() {
  const weightedCharacterSetsDir = join(
    process.cwd(),
    "apps/mvsi-server/src/data/WeightedCharacterSets",
  );

  console.log("Loading SlugIndex lookup...");
  const slugToAssetPath = await loadSlugIndexLookup();

  console.log("Finding all WeightedCharacterSet JSON files...");
  const jsonFiles = await findJsonFiles(weightedCharacterSetsDir);
  console.log(`Found ${jsonFiles.length} JSON files to process`);

  let processed = 0;
  let inserted = 0;
  let skipped = 0;
  let errors = 0;

  for (const filePath of jsonFiles) {
    try {
      const content = await readFile(filePath, "utf-8");
      const data: WeightedCharacterSet[] = JSON.parse(content);

      const slug = extractSlug(data);
      if (!slug) {
        console.warn(`No slug found in ${filePath}, skipping...`);
        skipped++;
        continue;
      }

      // Look up assetPath from slug (case-insensitive)
      const slugLower = slug.toLowerCase();
      const assetPath = slugToAssetPath.get(slugLower);

      if (!assetPath) {
        console.warn(`No assetPath found for slug "${slug}" in ${filePath}, skipping...`);
        skipped++;
        continue;
      }

      // Extract Properties from the first item
      const properties = data[0]?.Properties || {};

      // Insert or update in database
      await DataAssetModel.findOneAndUpdate(
        { slug },
        {
          $set: {
            slug,
            assetType: "MvsWeightedCharacterSet",
            assetPath,
            enabled: true,
            character_slug: "",
            Properties: properties,
          },
        },
        { upsert: true },
      );

      inserted++;
      processed++;

      if (processed % 50 === 0) {
        console.log(`Processed ${processed}/${jsonFiles.length} files...`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error);
      errors++;
    }
  }

  console.log("\n=== Load Summary ===");
  console.log(`Total files found: ${jsonFiles.length}`);
  console.log(`Successfully inserted/updated: ${inserted}`);
  console.log(`Skipped (no slug or assetPath): ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log("===================\n");
}
await loadWeightedCharacterSets();