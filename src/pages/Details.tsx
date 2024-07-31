import { useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";
import { fetchSimilarMovies, fetchSpecificMovie } from "../api/detailsApi";
import Expanded from "../components/Details/Expanded";
import Button from "../components/Details/Button";
import CardList from "../components/shared/CardList";
import Error from "../components/shared/Error";
import Loading from "../components/shared/Loading";
import ReactModal from "../components/Details/Modal";
import { ApiDetails, MediaPayload } from "../types";

const Details = () => {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState<string>("");
  const [, setTrailerError] = useState("");

  const {
    data: movieDetails,
    isLoading: movieDetailsLoading,
    error,
    isError,
  } = useQuery<ApiDetails, Error>(
    ["details", id],
    () => fetchSpecificMovie(id!),
    {
      enabled: !!id,
      onError: () => {
        return toast.error("Please Contact Customer Service");
      },
    }
  );
  const {
    data: similarMovies,
    isLoading: similarMoviesLoading,
    error: similarMoviesError,
    isError: similarMoviesIsError,
  } = useQuery<MediaPayload, Error>(
    ["similar-movies", id],
    () => fetchSimilarMovies(id!),
    {
      enabled: !!movieDetails,
      onError: () => {
        return toast.error("Please Contact Customer Service");
      },
    }
  );

  // Handle Trailer
  const showTrailer = () => {
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(
        movieDetails?.name ||
          movieDetails?.original_name ||
          movieDetails?.title ||
          movieDetails?.original_title ||
          ""
      )
        .then((url: string | URL) => {
          if (url) {
            const urlParams:
              | string
              | URLSearchParams
              | string[][]
              | Record<string, string>
              | undefined = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v")!);
          } else {
            setTrailerError("Trailer not Found for this movie");
            toast.error("Trailer not Found for this movie");
          }
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            setTrailerError("Trailer not Found for this movie");
          }
        });
    }
  };

  if (isError) return <Error message={error.message} />;
  return (
    <>
      {movieDetailsLoading ? (
        <Loading />
      ) : (
        <div className=" md:p-8 md:ml-24 w-full" data-test-id="movie-details">
          <>
            <div
              className=" bg-cover bg-center h-[448px] shadow-inner bg-opacity-50 md:rounded-md"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                  movieDetails?.image || "/assets/placeholder-image.png"
                })`,
              }}
            >
              <div className="pt-[70px] md:pt-[80px] ml-8 max-w-[250px] md:max-w-[450px] opacity-100 ">
                <div className="flex gap-2 flex-wrap select-none mb-1">
                  {movieDetails?.genres.map((element) => {
                    return (
                      <div
                        key={element.id}
                        className="px-2 py-1 text-sm text-white bg-primaryRed rounded-full font-outfitMedium"
                      >
                        {element.name}
                      </div>
                    );
                  })}
                </div>
                <div className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold break-word  ">
                  {movieDetails?.title || movieDetails?.name || ""}
                </div>
                <div
                  className="w-28 mb-5 font-bold"
                  data-test-id="play-button"
                  onClick={showTrailer}
                >
                  <Button name="Play" />
                </div>
                <Expanded text={movieDetails?.overview || ""} />
              </div>
            </div>
            <div className="p-4">
              <>
                {similarMoviesLoading ? (
                  <Loading />
                ) : (
                  <>
                    {similarMoviesIsError ? (
                      <Error message={similarMoviesError.message} />
                    ) : (
                      <CardList
                        title="Similar Movies"
                        movieList={similarMovies?.results || []}
                      />
                    )}
                  </>
                )}
              </>
            </div>
          </>
          {trailerUrl !== "" && (
            <ReactModal setTrailerUrl={setTrailerUrl}>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailerUrl}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </ReactModal>
          )}
        </div>
      )}
    </>
  );
};

export default Details;
