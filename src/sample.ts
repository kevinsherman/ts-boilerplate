import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

instance.interceptors.request.use((config) => {
  // modify request config here, e.g., add headers
  config.headers["X-Api-Key"] = process.env.AUTH_TOKEN;
  console.log(JSON.stringify(config.headers, null, 2));

  return config;
});

export default instance;

// todo - leaving off here...
