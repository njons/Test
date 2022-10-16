import {lookup} from "../deps.ts";
import setFilePath from "./utils/setFilePath.ts";

export async function router(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const filePath = setFilePath(requestEvent);
    let body;
    let fileSize;
    try {
      // set content-length in res.headers
      fileSize = (await Deno.stat(filePath)).size;
      // set decode and encode html
      const html = new TextDecoder("utf-8").decode(
        await Deno.readFile(filePath)
      );
      // set res.body with html
      body = new TextEncoder().encode(html);
    } catch (err) {
      const notFoundResponse = new Response("404 Not Found", {status: 404});
      await requestEvent.respondWith(notFoundResponse);
      return;
    }
    // build and send the response
    const response = new Response(body, {
      headers: {
        "content-length": fileSize.toString(),
        "content-type": lookup(filePath) || "application/octet-stream",
      },
    });
    await requestEvent.respondWith(response);
  }
}
