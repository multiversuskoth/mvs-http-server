import { ROLES } from "@mvsi/database/roles";
import {
  debounce,
  useDebouncedCallback,
} from "@tanstack/react-pacer/debouncer";
import {
  createFileRoute,
  Link,
  useNavigate,
  useRouteContext,
  useRouter,
} from "@tanstack/react-router";
import {
  createMiddleware,
  createServerFn,
  useServerFn,
} from "@tanstack/react-start";
import { Search } from "lucide-react";
import { useCallback, useRef } from "react";
import { z } from "zod";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { banAccount, changeRole, getAccounts } from "@/data/admin/accounts";
import {
  type GetPaginatedTableParams,
  getPageNumbers,
  searchValidator,
} from "@/utils/searchValidators";
import { getSession, useAppSession } from "@/utils/session";

export const authAdminMiddleware = createMiddleware().server(
  async ({ next }) => {
    const session = await getSession();
    if (session.data.role === "basic") {
      throw Error("Unauthorized");
    }
    return next();
  },
);
export const getAccountsFn = createServerFn({ method: "GET" })
  .middleware([authAdminMiddleware])
  .inputValidator((data: GetPaginatedTableParams) => data)
  .handler(async ({ data }) => {
    const accounts = await getAccounts(data.paginationParams, data.filters);

    return {
      pagination: accounts.pagination,
      accounts: accounts.data.map((a) => {
        return { ...a, _id: a._id.toHexString() };
      }),
    };
  });

export const banAccountFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator((data: { value: boolean; steam_id: string }) => data)
  .handler(async ({ data }) => {
    return await banAccount(data.steam_id, data.value);
  });

export const changeRoleFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator((data: { steam_id: string; newRole: string }) => data)
  .handler(async ({ data }) => {
    const session = await useAppSession();
    return await changeRole(data.steam_id, session.data.role!, data.newRole);
  });

export const Route = createFileRoute("/admin/accounts")({
  ssr: "data-only",
  validateSearch: (search) => searchValidator().parse(search),
  loaderDeps: ({ search: { page, limit, name } }) => ({ page, limit, name }),
  loader: async ({ deps: { page, limit, name } }) => {
    const accounts = await getAccountsFn({
      data: {
        paginationParams: { limit: limit, page: page },
        filters: { name },
      },
    });
    return accounts;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const context = Route.useRouteContext();
  let userRole = "basic";
  if ("user" in context) {
    userRole = context.user.role;
  }

  const { page, limit } = Route.useSearch();

  const { currentPage, totalPages, hasNextPage, hasPreviousPage } =
    data.pagination;

  // Helper to generate page numbers with ellipses

  const router = useRouter();
  const banAccount = useServerFn(banAccountFn);
  const changeRole = useServerFn(changeRoleFn);

  const navigate = useNavigate({ from: Route.fullPath });
  const searchInput = useRef<HTMLInputElement>(null);
  const search = () => {
    const value = searchInput.current?.value;
    navigate({
      to: Route.fullPath,
      search: (prev) => ({ ...prev, name: value }),
    });
  };

  const debounceSearch = useDebouncedCallback(search, {
    wait: 500,
  });

  const toggleBan = async (steam_id: string, value: boolean) => {
    await banAccount({ data: { steam_id, value } });
    router.invalidate();
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
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
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Steam Name</TableHead>
              <TableHead>Banned</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.accounts.map((account) => (
              <TableRow key={account._id}>
                <TableCell className="font-medium w-75">
                  {account._id}
                </TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.steam_name}</TableCell>
                <TableCell>
                  <Switch
                    onCheckedChange={(checked) =>
                      toggleBan(account.steam_id, checked)
                    }
                    checked={account.blocked}
                  />
                </TableCell>
                <TableCell>
                  {account.role === "superadmin" ||
                  userRole === "power" ||
                  account.steam_id === context.user.steam_id ? (
                    <div>{account.role}</div>
                  ) : (
                    <Select
                      defaultValue={account.role}
                      onValueChange={(value) => {
                        changeRole({
                          data: { newRole: value, steam_id: account.steam_id },
                        });
                        router.invalidate();
                      }}
                    >
                      <SelectTrigger
                        id="country"
                        className="border-border/50 bg-background/50"
                      >
                        <SelectValue></SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {ROLES.filter((r) => {
                          if (
                            r.includes("admin") &&
                            userRole !== "superadmin"
                          ) {
                            return false;
                          }
                          return true;
                        }).map((role) => {
                          return (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  )}
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
                to="/admin/accounts"
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
                to="/admin/accounts"
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
