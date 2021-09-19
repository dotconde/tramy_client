var BASE_URL;

switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://tramyback.herokuapp.com";
    break;
  default:
    BASE_URL = "http://localhost:3000";
    break;
}

const ENDPOINTS = {
  LOGIN: "login",
  PROFILE: "my_profile",
};

export { BASE_URL, ENDPOINTS };
