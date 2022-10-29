// import { serve } from "../deps.ts"
// import { h, renderSSR } from "../deps.ts";

// function App() {
//   return (
//     <html>
//       <head>
//         <title>Hello from JSX</title>
//       </head>
//       <body>
//         <h1>Hello world</h1>
//       </body>
//     </html>
//   );
// }

// function handler(req) {
//   const html = renderSSR(<App />);
//   return new Response(html, {
//     headers: {
//       "content-type": "text/html",
//     },
//   });
// }

// serve(handler);