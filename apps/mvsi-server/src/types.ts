import { t } from "elysia";

export const HydraQuerySchema = t.Object({
  fields: t.Optional(t.Array(t.String())),
  partial_response: t.Optional(t.Number()),
});

export const HydraQueryPaginated = t.Object({
  ...HydraQuerySchema.properties,
  count: t.Optional(t.Number()),
  page: t.Optional(t.Number()),
  templates: t.Optional(t.Array(t.String())),
});
