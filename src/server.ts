import {router} from "../../playground/deno-test/src/router.ts";

// Start listening on port 8080 of localhost.
const server = Deno.listen({port: 8080});
console.log("File server running on http://localhost:8080/");

for await (const conn of server) {
  router(conn).catch(console.error);
}
