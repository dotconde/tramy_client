var BASE_URL;

switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://tramyback.herokuapp.com";
    break;
  case "test":
    BASE_URL = "https://staging.tramyback.herokuapp.com";
    break;
  case "development":
    BASE_URL = "http://localhost:3000";
    break;
  default:
    BASE_URL = "http://localhost:3000";
    break;
}

const ENDPOINTS = {
  LOGIN: "login",
};

export { BASE_URL, ENDPOINTS };
