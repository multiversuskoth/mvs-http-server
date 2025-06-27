export const maps1v1 = [
  "M001_V2",
  "M003_V1",
  "M003_V5",
  "M008_V2",
  "M009_V2",
  "M011_V3",
  "M011_V4",
  "M006_V3",
  "M015_V1",
];
export const maps2v2 = [
  "M001",
  "M003_V3",
  "M003_V5",
  "M009_V1",
  "M011_V1",
  "M011_V2",
  "M006_V2",
];

export function getRandomMapByType(mode: string) {
  if (mode === "1v1") {
    return getRandomMap1v1();
  }
  if (mode === "2v2") {
    return getRandomMap2v2();
  }
  return getRandomMap1v1();
}

export function getRandomMap1v1(): string {
  const randomIndex = Math.floor(Math.random() * maps1v1.length);
  return maps1v1[randomIndex];
}

export function getRandomMap2v2(): string {
  const randomIndex = Math.floor(Math.random() * maps2v2.length);
  return maps2v2[randomIndex];
}

export const MAP_ROATATIONS = {
  UnrankedDuos: {
    slug: "UnrankedDuos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 25,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M014",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 20,
        },
      ],
    },
  },
  default: {
    slug: "default",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000",
          SelectionWeight: 1,
        },
        {
          Map: "M000_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M000_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M000_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "M001_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 1,
        },
      ],
    },
  },
  UnrankedSolos: {
    slug: "UnrankedSolos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M001_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 20,
        },
      ],
    },
  },
  CustomSolos: {
    slug: "CustomSolos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V2_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001_V2",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 1,
        },
      ],
    },
  },
  CustomDuos: {
    slug: "CustomDuos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V1_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
      ],
    },
  },
  UnrankedFFA: {
    slug: "UnrankedFFA",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 25,
        },
        {
          Map: "M016",
          SelectionWeight: 25,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M007",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M014",
          SelectionWeight: 20,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 20,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 20,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 20,
        },
      ],
    },
  },
  CustomFFA: {
    slug: "CustomFFA",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V1_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
      ],
    },
  },
  PlaytestSolos: {
    slug: "PlaytestSolos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M001_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 20,
        },
      ],
    },
  },
  PlaytestFFA: {
    slug: "PlaytestFFA",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 25,
        },
        {
          Map: "M016",
          SelectionWeight: 25,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M007",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M014",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 20,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 20,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 20,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 20,
        },
      ],
    },
  },
  PlaytestDuos: {
    slug: "PlaytestDuos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 25,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 0,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M014",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 0,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M021",
          SelectionWeight: 20,
        },
      ],
    },
  },
  PlaytestCustomSolos: {
    slug: "PlaytestCustomSolos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V2_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001_V2",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M025_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M026_V3",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
      ],
    },
  },
  PlaytestCustomFFA: {
    slug: "PlaytestCustomFFA",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V1_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M025_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M026_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M026_V2",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
      ],
    },
  },
  PlaytestCustomDuos: {
    slug: "PlaytestCustomDuos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V1_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M025_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M026_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M026_V2",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
      ],
    },
  },
  LocalPlay: {
    slug: "LocalPlay",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V1_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M000_V2_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "M001_V2",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
      ],
    },
  },
  Lab: {
    slug: "Lab",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M000_V1_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M000_V2_NEW",
          SelectionWeight: 1,
        },
        {
          Map: "M001",
          SelectionWeight: 1,
        },
        {
          Map: "M001_V2",
          SelectionWeight: 1,
        },
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M008",
          SelectionWeight: 1,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module04",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module05",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module08",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module09",
          SelectionWeight: 1,
        },
        {
          Map: "map_pve_m016_module10",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M017_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 1,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 1,
        },
        {
          Map: "mts001_v3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_14",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
        {
          Map: "MTS002_V1",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 1,
        },
        {
          Map: "mts003_v3",
          SelectionWeight: 1,
        },
      ],
    },
  },
  RankedSolos: {
    slug: "RankedSolos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M001_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 20,
        },
      ],
    },
  },
  RankedDuos: {
    slug: "RankedDuos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 20,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 20,
        },
      ],
    },
  },
  PlaytestRankedSolos: {
    slug: "PlaytestRankedSolos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M001_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v2",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V2",
          SelectionWeight: 20,
        },
      ],
    },
  },
  PlaytestRankedDuos: {
    slug: "PlaytestRankedDuos",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M021",
          SelectionWeight: 20,
        },
      ],
    },
  },
  maprotation_volleyball: {
    slug: "maprotation_volleyball",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "pve_volleyball_001",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_infinitejumps: {
    slug: "maprotation_infinitejumps",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "PVE_M003_Floorless",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_lazaruspit: {
    slug: "maprotation_lazaruspit",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_racecar: {
    slug: "maprotation_racecar",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "RaceCourse_001",
          SelectionWeight: 1,
        },
        {
          Map: "RaceCourse_002",
          SelectionWeight: 1,
        },
        {
          Map: "RaceCourse_003",
          SelectionWeight: 1,
        },
        {
          Map: "RaceCourse_004",
          SelectionWeight: 1,
        },
        {
          Map: "pve_racecourse_005",
          SelectionWeight: 1,
        },
        {
          Map: "pve_racecourse_006",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_tiny: {
    slug: "maprotation_tiny",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M015_V2",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_shockfloor: {
    slug: "maprotation_shockfloor",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_icepit: {
    slug: "maprotation_icepit",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "PVE_09",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_hammertime: {
    slug: "maprotation_hammertime",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "PvE_03",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_bambooboogie: {
    slug: "maprotation_bambooboogie",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "PVE_05_V1",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_splat: {
    slug: "maprotation_splat",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M007",
          SelectionWeight: 1,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M010_V1",
          SelectionWeight: 2,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 2,
        },
        {
          Map: "M014",
          SelectionWeight: 2,
        },
      ],
    },
  },
  maprotation_retrohorror: {
    slug: "maprotation_retrohorror",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M002_V3",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 1,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 1,
        },
        {
          Map: "M014",
          SelectionWeight: 1,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_targetrush: {
    slug: "maprotation_targetrush",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "targetrush_001",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetrush_002",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetrush_003",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_arena: {
    slug: "maprotation_arena",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 25,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 0,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M014",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 20,
        },
        {
          Map: "mts002_v2",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v4",
          SelectionWeight: 20,
        },
        {
          Map: "mts001_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M023_V1",
          SelectionWeight: 20,
        },
      ],
    },
  },
  maprotation_contender: {
    slug: "maprotation_contender",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "contender",
          SelectionWeight: 1,
        },
        {
          Map: "contender_002",
          SelectionWeight: 1,
        },
        {
          Map: "contender_003",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_gumballshower: {
    slug: "maprotation_gumballshower",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M018_V1",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_divekick: {
    slug: "maprotation_divekick",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M017_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M018_V2",
          SelectionWeight: 20,
        },
        {
          Map: "mts003_v1",
          SelectionWeight: 20,
        },
      ],
    },
  },
  maprotation_spotlightpilot: {
    slug: "maprotation_spotlightpilot",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "mts001_v5",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_rocketfistrain_1v1: {
    slug: "maprotation_rocketfistrain_1v1",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M001_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V4",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M014_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M008_V2",
          SelectionWeight: 20,
        },
      ],
    },
  },
  maprotation_rocketfistrain: {
    slug: "maprotation_rocketfistrain",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "M003_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M001",
          SelectionWeight: 20,
        },
        {
          Map: "M011_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M009_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M008",
          SelectionWeight: 20,
        },
        {
          Map: "M006_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M010_V2",
          SelectionWeight: 25,
        },
        {
          Map: "M016_V2",
          SelectionWeight: 20,
        },
        {
          Map: "M015_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M002_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M007",
          SelectionWeight: 20,
        },
        {
          Map: "M012_V3",
          SelectionWeight: 20,
        },
        {
          Map: "M014",
          SelectionWeight: 20,
        },
        {
          Map: "M016_V4",
          SelectionWeight: 20,
        },
        {
          Map: "MTS001_V1",
          SelectionWeight: 20,
        },
        {
          Map: "M003_V5",
          SelectionWeight: 20,
        },
      ],
    },
  },
  maprotation_targetrun: {
    slug: "maprotation_targetrun",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "TargetRun_001",
          SelectionWeight: 1,
        },
        {
          Map: "TargetRun_002",
          SelectionWeight: 1,
        },
        {
          Map: "TargetRun_003",
          SelectionWeight: 1,
        },
        {
          Map: "TargetRun_004",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_targetclimb: {
    slug: "maprotation_targetclimb",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "TargetClimb_001",
          SelectionWeight: 1,
        },
        {
          Map: "TargetClimb_002",
          SelectionWeight: 1,
        },
        {
          Map: "TargetClimb_003",
          SelectionWeight: 1,
        },
        {
          Map: "TargetClimb_004",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_targetbreak: {
    slug: "maprotation_targetbreak",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "TargetBreak_001",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_002",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetbreak_003_data_local",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_004",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetbreak_005_data_local",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_006",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_007",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_008",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_009",
          SelectionWeight: 1,
        },
        {
          Map: "TargetBreak_010",
          SelectionWeight: 1,
        },
        {
          Map: "pve_08_targetbreak_data_local",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetbreak_012",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetbreak_013",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetbreak_014",
          SelectionWeight: 1,
        },
        {
          Map: "pve_targetbreak_015",
          SelectionWeight: 1,
        },
      ],
    },
  },
  maprotation_golf: {
    slug: "maprotation_golf",
    data: {
      bIsEnabled: true,
      MapsInRotation: [
        {
          Map: "GolfCourse_001",
          SelectionWeight: 1,
        },
        {
          Map: "GolfCourse_002",
          SelectionWeight: 1,
        },
        {
          Map: "GolfCourse_003",
          SelectionWeight: 1,
        },
        {
          Map: "GolfCourse_004",
          SelectionWeight: 1,
        },
        {
          Map: "golfcourse_005",
          SelectionWeight: 1,
        },
        {
          Map: "pve_golfcourse_006",
          SelectionWeight: 1,
        },
        {
          Map: "GolfCourse_008",
          SelectionWeight: 1,
        },
        {
          Map: "PVE_08_Golf",
          SelectionWeight: 1,
        },
        {
          Map: "pve_golfcourse_007",
          SelectionWeight: 1,
        },
      ],
    },
  },
};
