import { type Player, PlayerModel } from "@mvsi/database/models/Player";
import type { PaprRootFilterOperators } from "papr";
import type {
  PaginatedResponse,
  PaginationParams,
  TableFilters,
} from "@/utils/searchValidators";

export async function getAccounts(
  paginationParams: PaginationParams = {},
  filters: TableFilters = {},
): Promise<PaginatedResponse<Omit<Player, "profile_id">>> {
  const page = Math.max(1, paginationParams.page || 1);
  const limit = Math.min(20, Math.max(1, paginationParams.limit || 20));

  const rootQuery: PaprRootFilterOperators<Player> = {};

  if (filters.name) {
    rootQuery.$or = [
      { name: { $regex: filters.name, $options: "i" } },
      { steam_name: { $regex: filters.name, $options: "i" } },
    ];
  }

  // Calculate skip value
  const skip = (page - 1) * limit;

  const projection = {
    profile_id: 0,
  } as const;

  // Execute query with pagination
  const [data, totalItems] = await Promise.all([
    PlayerModel.find(rootQuery, {
      projection,
      limit: limit,
      //sort: { admin: sortOrder },
      skip: skip,
    }),
    PlayerModel.countDocuments(rootQuery),
  ]);

  // Calculate pagination metadata
  const totalPages = Math.ceil(totalItems / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    data: data,
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

export async function banAccount(steam_id: string, value: boolean) {
  try {
    await PlayerModel.findOneAndUpdate(
      { steam_id },
      { $set: { blocked: value } },
    );
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}

export async function changeRole(
  steam_id: string,
  adminRole: string,
  newRole: string,
) {
  try {
    if (adminRole !== "admin" && adminRole !== "superadmin") {
      return false;
    }
    if (
      adminRole === "admin" &&
      (newRole === "superadmin" || newRole === "admin")
    ) {
      return;
    }
    await PlayerModel.findOneAndUpdate(
      { steam_id, role: { $ne: "superadmin" } },
      { $set: { role: newRole } },
    );
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}
