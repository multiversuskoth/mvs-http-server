import { useDebouncedCallback } from "@tanstack/react-pacer/debouncer";
import { Search } from "lucide-react";
import { useRef } from "react";
import { ToggleAsset } from "@/components/toggleAsset";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { GetDataAssetResponse } from "@/data/admin/assets";
import {
  getPageNumbers,
  type PaginatedResponse,
} from "@/utils/searchValidators";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type AssetTableComponentProps = {
  name: string;
  data: PaginatedResponse<GetDataAssetResponse>;
  page: number;
  navigate: (name: string | undefined) => void;
};

export function AssetTableComponent({
  name,
  data,
  page,
  navigate,
}: AssetTableComponentProps) {
  const { currentPage, hasNextPage, hasPreviousPage, totalPages } =
    data.pagination;

  const searchInput = useRef<HTMLInputElement>(null);
  const search = () => {
    const value = searchInput.current?.value;
    navigate(value);
  };

  const debounceSearch = useDebouncedCallback(search, {
    wait: 500,
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardAction>
          <InputGroup>
            <InputGroupInput
              ref={searchInput}
              onChange={debounceSearch}
              placeholder="Search..."
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Slug</TableHead>
              <TableHead>Enabled</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((asset) => (
              <TableRow key={asset._id}>
                <TableCell width={5000}>{asset.slug}</TableCell>
                <TableCell>
                  <ToggleAsset
                    assetId={asset._id}
                    value={asset.enabled}
                  ></ToggleAsset>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                to="."
                //@ts-expect-error
                search={(prev) => ({ ...prev, page: Math.max(0, page - 1) })}
                disabled={!hasPreviousPage}
              />
            </PaginationItem>

            {/* Dynamic Page Links */}
            {getPageNumbers(totalPages, currentPage).map((page) => (
              <PaginationItem key={page}>
                {page < 0 ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    isActive={page === currentPage}
                    //@ts-expect-error
                    search={(prev) => ({
                      limit: prev.limit!,
                      page: page as number,
                    })}
                    to="."
                  >
                    {" "}
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                to="."
                //@ts-expect-error
                search={(prev) => ({ ...prev, page: page + 1 })}
                disabled={!hasNextPage}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}
