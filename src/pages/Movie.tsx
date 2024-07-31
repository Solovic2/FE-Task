import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import CardList from "../components/shared/CardList";
import Loading from "../components/shared/Loading";
import PageWrapper from "../components/shared/PageWrapper";
import Pagination from "../components/shared/Pagination";
import { MediaPayload } from "../types";
import Error from "../components/shared/Error";
import { fetchMovieMedia } from "../api/movieApi";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;
  const { data, isLoading, error, isError } = useQuery<MediaPayload, Error>(
    ["movies", page],
    () => fetchMovieMedia(page),
    {
      enabled: !searchParams.get("q"),
      onError: () => {
        toast.error("Please Contact Customer Service");
      },
    }
  );

  const pageCount = data && data.total_pages < 500 ? data.total_pages : 500;
  const handlePageChange = (selectedItem: { selected: number }) => {
    const value = selectedItem.selected + 1;
    if (value === 1) setSearchParams({}, { replace: true });
    else setSearchParams({ page: value.toString() }, { replace: true });
  };

  return (
    <PageWrapper placeholder="Search for movies">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isError ? (
            <Error message={error.message} />
          ) : (
            <>
              <CardList title="Movie Series" movieList={data?.results || []} />
              {data && data.results.length > 0 && (
                <Pagination
                  totalPages={pageCount}
                  handlePageChange={handlePageChange}
                  currentPage={data.page}
                  dataTestId="search-pagination"
                />
              )}
            </>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default Movies;
