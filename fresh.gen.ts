// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.ts";
import * as $1 from "./routes/api/sign-in.ts";
import * as $2 from "./routes/api/sign-out.ts";
import * as $3 from "./routes/api/sign-up.ts";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/secret.tsx";
import * as $6 from "./routes/sign-in.tsx";
import * as $7 from "./routes/sign-up.tsx";
import * as $$0 from "./islands/AuthForm.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.ts": $0,
    "./routes/api/sign-in.ts": $1,
    "./routes/api/sign-out.ts": $2,
    "./routes/api/sign-up.ts": $3,
    "./routes/index.tsx": $4,
    "./routes/secret.tsx": $5,
    "./routes/sign-in.tsx": $6,
    "./routes/sign-up.tsx": $7,
  },
  islands: {
    "./islands/AuthForm.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
