import { axiosClient } from "./axios-client";

export const articleApi = {
  getArticles() {
    return axiosClient.get(`/article`);
  },
};
