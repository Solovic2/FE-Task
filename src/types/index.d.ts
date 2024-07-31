export interface Media {
  id: number;
  media_type: string;
  backdrop_path: string;
  poster_path?: string;
  release_date: string;
  first_air_date: string;
  adult: boolean;
  title: string;
  name: string;
  original_name?: string;
  original_title?: string;
}
export type MediaCardProp = Pick<Media, "id" | "media_type"> & {
  adult: string;
  date: string;
  image: string;
  title: string;
  cardLink: string;
};
export interface ApiPayload {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}

export interface MediaPayload {
  page: number;
  results: MediaCardProp[];
  total_pages: number;
  total_results: number;
}
export interface ApiDetails {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  image?: string;
  genres: Genre[];
  id: number;
  original_title?: string;
  overview: string;
  popularity: number;
  release_date?: string;
  title?: string;
  name?: string;
  original_name?: string;
  type?: string;
}
export interface Genre {
  id: number;
  name: string;
}
