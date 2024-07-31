import { ApiDetails, ApiPayload, MediaPayload } from "../types";
import axios from "./axios";
import { transformResponse } from "./helpers";
import requests from "./requests";

const fetchSpecificMovie = async (id: string): Promise<ApiDetails> => {
  try {
    const response = await axios.get<ApiDetails>(
      requests.fetchMovieDetails(id),
      {
        params: { language: "en-US" },
      }
    );
    const data = response.data;
    return {
      ...data,
      image: data.backdrop_path
        ? requests.basic_imageUrl + data.backdrop_path
        : data.poster_path
        ? requests.basic_imageUrl + data.poster_path
        : "/assets/placeholder-image.png",
    };
  } catch (error) {
    throw new Error("Error while fetching movie details");
  }
};
const fetchSimilarMovies = async (id: string): Promise<MediaPayload> => {
  try {
    const response = await axios.get<ApiPayload>(
      requests.fetchSimilarMovies(id),
      {
        params: { language: "en-US" },
      }
    );
    const data = response.data;

    return transformResponse(data);
  } catch (error) {
    throw new Error("Error while fetching similar movies");
  }
};

export { fetchSimilarMovies, fetchSpecificMovie };
