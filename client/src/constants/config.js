export const API_NOTIFICATIONS_MESSAGE = {
  loading: {
    title: "loading...",
    message: "Data is being loaded, please wait",
  },
  success: {
    title: "success",
    message: "Data successfully loadeed",
  },
  responseFailure: {
    title: "Error",
    message:
      "Error occured while fetching data from the server, Please try agian",
  },
  requestFailure: {
    title: "Error",
    message: "Error occured while parsing request data",
  },
  requestError: {
    title: "Error",
    message:
      "Unable to connect with the server. Please check internet connectivity and check again",
  },
};

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
};
