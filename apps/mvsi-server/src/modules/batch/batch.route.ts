import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";

enum BatchVerb {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put(
  "/batch",
  async ({ body, headers }) => {
    const requests = body.requests.map((r) =>
      MAIN_APP.handle(
        new Request(
          `${MAIN_APP.server?.protocol}://${MAIN_APP.server?.hostname}:${MAIN_APP.server?.port}${r.url}`,
          {
            method: r.verb,
            body: JSON.stringify(r.body),
            headers: {
              ...r.headers,
              ...headers,
              "content-type": "application/json",
              "x-mvsi-batch": "1",
            },
          },
        ),
      ),
    );
    const responses = await Promise.all(requests);
    const response = [];
    for (const r of responses) {
      const bodyText = await r.body?.text();
      response.push({
        status_code: r.status,
        headers: r.headers,
        body: bodyText ? JSON.parse(bodyText) : "",
      });
    }

    return {
      responses: response,
    };
  },
  {
    body: t.Object({
      requests: t.Array(
        t.Object({
          body: t.Any(),
          headers: t.Any(),
          url: t.String(),
          verb: t.Enum(BatchVerb),
        }),
      ),
    }),
  },
);

MAIN_APP.use(router);
