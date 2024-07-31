import { ApiPayload, MediaPayload } from "../types";
import axios from "./axios";
import { transformResponse } from "./helpers";
import requests from "./requests";

const fetchMovieMedia = async (page: number): Promise<MediaPayload> => {
  try {
    const response = await axios.get<ApiPayload>(requests.fetchMovies, {
      params: {
        include_adult: "false",
        language: "en-US",
        page: page,
      },
    });
    const data = response.data;
    return transformResponse(data);
  } catch (error) {
    throw new Error("Error while fetching movie list results");
  }
};
const fetchSearch = async (
  searchQuery: string,
  page: number
): Promise<MediaPayload> => {
  try {
    const response = await axios.get<ApiPayload>(requests.fetchSearchMovies, {
      params: {
        query: searchQuery,
        include_adult: "false",
        language: "en-US",
        page: page,
      },
    });
    const data = response.data;
    return transformResponse(data);
  } catch (error) {
    throw new Error("Error while fetching search results");
  }
};

export { fetchMovieMedia, fetchSearch };
