import { ApiPayload, Media, MediaCardProp } from "../types";
import requests from "./requests";

export const transformResponse = (data: ApiPayload) => {
  const payload = data.results.map((item: Media) => {
    return {
      ...item,
      media_type: "movie",
      adult: item.adult ? "+18" : "PG",
      date:
        item.first_air_date?.substring(0, 4) ||
        item.release_date?.substring(0, 4),
      image: item.backdrop_path
        ? requests.basic_imageUrl + item.backdrop_path
        : item.poster_path
        ? requests.basic_imageUrl + item.poster_path
        : "/assets/placeholder-image.png",
      title:
        item.title || item.name || item.original_name || item.original_title,
      cardLink: `${`/movie/${item.id}`}`,
    };
  }) as MediaCardProp[];
  return { ...data, results: payload };
};
