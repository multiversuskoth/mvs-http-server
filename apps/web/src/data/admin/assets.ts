import { ConfigDataModel } from "@mvsi/database/models/Config";
import { type DataAsset, DataAssetModel } from "@mvsi/database/models/DataAssets";
import { ObjectId } from "@mvsi/database/papr";
import type { PaprFilter } from "papr";
import type { PaginatedResponse, PaginationParams, TableFilters } from "@/utils/searchValidators";

export type GetDataAssetResponse = {
  _id: string;
  enabled: boolean;
  slug: string;
};

export async function getDataAsset(
  assetType: string,
  paginationParams: PaginationParams,
  filters: TableFilters,
): Promise<PaginatedResponse<GetDataAssetResponse>> {
  const page = Math.max(1, paginationParams.page || 1);
  const limit = Math.min(20, Math.max(1, paginationParams.limit || 20));

  const rootQuery: PaprFilter<DataAsset> = {};
  rootQuery.assetType = assetType;
  if (filters.name) {
    rootQuery.slug = { $regex: filters.name, $options: "i" };
  }

  // Calculate skip value
  const skip = (page - 1) * limit;

  // Execute query with pagination
  const [data, totalItems] = await Promise.all([
    DataAssetModel.find(rootQuery, {
      limit: limit,
      projection: { _id: 1, slug: 1, enabled: 1 },
      //sort: { admin: sortOrder },
      skip: skip,
    }),
    DataAssetModel.countDocuments(rootQuery),
  ]);

  // Calculate pagination metadata
  const totalPages = Math.ceil(totalItems / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    data: data.map((d) => {
      return { ...d, _id: d._id.toHexString() };
    }),
    pagination: {
      currentPage: page,
      pageSize: limit,
      totalItems,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    },
  };
}

export async function toggleDataAsset(assetId: string, value: boolean) {
  try {
    await DataAssetModel.findOneAndUpdate(
      { _id: new ObjectId(assetId) },
      { $set: { enabled: value } },
    );

    await ConfigDataModel.findOneAndUpdate(
      {}, // match the single entry
      { $inc: { CRC: 1 } }, // increment
      { upsert: true },
    );
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}
