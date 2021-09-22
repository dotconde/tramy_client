var BASE_URL;

switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://tramyback.herokuapp.com";
    break;
  default:
    BASE_URL = "https://tramyback.herokuapp.com";
    break;
}

const ENDPOINTS = {
  LOGIN: "login",
  PROFILE: "my_profile",
  ORGANIZATION: "my_organization",
  ACCOUNT: "accounts",
};

export { BASE_URL, ENDPOINTS };
