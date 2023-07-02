/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { debounce } from "lodash";

import SearchBox from "../Components/SearchBox";
import Tabs from "../Components/Tabs";
import API from "../API/API";
import { TrendingInterface } from "./Trending";
import SingleCard from "../Components/SingleCard";
import CustomPagination from "../Components/Pagination/CustomPagination";
import useOnline from "../Hooks/useOnline";
import Offline from "../Components/Offline";
import SingleCardUI from "../Components/Shimmer/SingleCardUI";

const Search = () => {
  const [tab, setTab] = useState<number>(0);
  const [isOnline] = useOnline();
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<[]>([]);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [loader,setLoader] = useState(false);
  const [page, setPage] = useState<number>(1);

  const { searchAPI } = API();
  const debouncedSetSearchText = debounce(async () => {
    await getSearch();
  }, 600);

  const getSearch = async () => {
    try {
      setLoader(true);
      const response = await searchAPI({ type: tab, searchText, page });
      response && setResults(response?.results);
      setLoader(false)
      setTotalPages(response.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    debouncedSetSearchText();
    return () => {
      debouncedSetSearchText.cancel();
    };
  }, [searchText, tab, page]);
  if (!isOnline) return <Offline />;

  return (
    <div className="pb-[6rem] dark:bg-slate-800 bg-slate-50 md:px-20  p-5 dark:text-white text-lg min-h-[89vh] max-h-fit overflow-y-scroll">
      <div className="lg:px-[30%]">
        <SearchBox prop={{ searchText, setSearchText, getSearch }} />
      </div>
      <div className="mt-5">
        <div className="mt-5 ">
          <Tabs prop={{ tab, setTab }} />
        </div>
        {results.length <= 0 && searchText ? (
          <>
            <div className="flex items-center justify-center h-[50vh]">
              <div>
                <h1 className="text-6xl text-center my-2">&#9785;</h1>
                OOps No results present
              </div>
            </div>
          </>
        ) : (
          <>{
            loader ? <div className="flex flex-wrap gap-5">
              {Array(10).fill('u').map(()=>{
                return <SingleCardUI/>
              })}
            </div>:
                      <div className="">
                      <section className=" grid md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-3 md:p-14 p-5  ">
                        {results &&
                          results.map((trending: TrendingInterface) => {
                            tab
                              ? (trending.media_type = "tv")
                              : (trending.media_type = "movie");
          
                            return <SingleCard key={trending.id} content={trending} />;
                          })}
                      </section>
                      {results?.length ? (
                        <CustomPagination prop={{ setPage, page, totalPages }} />
                      ) : (
                        ""
                      )}
                    </div>
          }
          </>

        )}
      </div>
    </div>
  );
};

export default Search;
