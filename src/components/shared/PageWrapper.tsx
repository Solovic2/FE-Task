import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSearch } from "../../api/movieApi";
import { MediaPayload } from "../../types";
import CardList from "./CardList";
import Loading from "./Loading";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Error from "./Error";

interface PageWrapperProps {
  children: ReactNode;
  placeholder: string;
}

const PageWrapper = ({ children, placeholder }: PageWrapperProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;
  const searchQuery: string = searchParams.get("q") || "";

  const { data, isFetching, isError, error } = useQuery<MediaPayload, Error>(
    ["search-movie", searchQuery, page],
    () => fetchSearch(searchQuery, page),
    {
      enabled: !!searchQuery,
      onError: () => {
        toast.error("Please Contact Customer Service");
      },
    }
  );
  const handleSearchParamsChange = (
    params: Record<string, string | string[]>
  ) => {
    setSearchParams(params, { replace: true });
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    const value = selectedItem.selected + 1;
    if (searchQuery) {
      setSearchParams(
        { page: value.toString(), q: searchQuery },
        { replace: true }
      );
    }
  };

  return (
    <div className="p-4 md:p-8 md:ml-24 w-full">
      <SearchInput
        placeholder={placeholder}
        value={searchQuery}
        setSearchParams={handleSearchParamsChange}
      />
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {isError ? (
            <Error message={error.message} />
          ) : (
            <>
              {searchQuery ? (
                <>
                  <CardList
                    title={`Found ${
                      data?.total_results || "0"
                    } movie results for '${searchQuery}'`}
                    movieList={data?.results || []}
                  />
                  {data && data.total_results > 0 && (
                    <Pagination
                      totalPages={data.total_pages}
                      handlePageChange={handlePageChange}
                      currentPage={data.page}
                      dataTestId="search-pagination"
                    />
                  )}
                </>
              ) : (
                <>{children}</>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PageWrapper;
