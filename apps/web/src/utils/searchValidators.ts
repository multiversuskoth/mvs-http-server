import z from "zod";

export const searchValidator = (pageSize = 20) =>
  z.object({
    name: z.string().optional(),
    page: z.number().catch(1),
    limit: z.number().catch(pageSize),
  });

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface TableFilters {
  name?: string;
}

export type GetPaginatedTableParams = {
  paginationParams: PaginationParams;
  filters: TableFilters;
};

export function getPageNumbers(totalPages: number, currentPage: number) {
  const pages: number[] = [];
  const showMax = 3; // Number of pages to show around current page

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // Always show first
      i === totalPages || // Always show last
      (i >= currentPage - 1 && i <= currentPage + 1) // Show neighbors
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] > 0) {
      if (pages.includes(-1)) {
        pages.push(-2);
      } else {
        pages.push(-1);
      }
    }
  }
  return pages;
}
