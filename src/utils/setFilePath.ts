const BASE_PATH = "./public";

const setFilePath = (requestEvent) => {
  // Use the request pathname as filepath
  const url = new URL(requestEvent.request.url);
  const requestRoute = decodeURIComponent(url.pathname);
  // serve index if /
  return requestRoute === "/"
    ? `${BASE_PATH}/index.html`
    : `${BASE_PATH}${requestRoute}`;
};

export default setFilePath;
