import apiCall from "./apiCall";

export default (url, data) => apiCall(url, "PUT", data);