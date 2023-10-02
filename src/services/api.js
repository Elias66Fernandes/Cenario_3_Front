import axios from "axios";

const apiCall = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const api = {
  get: async (url) => {
    return await apiCall.get(url);
  },
  post: async (url, data) => {
    return await apiCall.post(url, data);
  },
  put: async (url, data) => {
    return await apiCall.put(url, data);
  },
  delete: async (url) => {
    return await apiCall.delete(url);
  },
};
