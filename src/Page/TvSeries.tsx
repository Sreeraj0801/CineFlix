/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import API from "../API/API";
import Offline from "../Components/Offline";
import CustomPagination from "../Components/Pagination/CustomPagination";
import SingleCard from "../Components/SingleCard";
import useOnline from "../Hooks/useOnline";
import { TrendingInterface } from "./Trending";
import TrendingUI from "../Components/Shimmer/TrendingUI";
import useGenre from "../Hooks/useGenre";
import Generes from "../Components/Generes";
import { Helmet } from "react-helmet";

const TvSeries = () => {
  const [isOnline] = useOnline();
  const { tvSeriesAPI } = API();
  const [tvSeries, setTvSeries] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [slectedGeneres, setSlectedGeneres] = useState<[]>([]);
  const [generes, setGeneres] = useState<[]>([]);

  const getTrending = async ({
    page,
    genreForURL,
  }: {
    page: number;
    genreForURL: string;
  }) => {
    try {
      const response = await tvSeriesAPI({ page, genreForURL });
      setTotalPages(response.total_pages);
      setTvSeries(response.results);
    } catch (error) {
      console.log(error);
    }
  };
  const genreForURL = useGenre(slectedGeneres) || "";

  useEffect(() => {
    getTrending({ page, genreForURL });
    window.scroll(0, 0);
  }, [page, genreForURL]);

  if (!isOnline) return <Offline />;
  else if (!tvSeries.length && !slectedGeneres.length) return <TrendingUI />;

  return (
    <div
      className={`pb-[6rem] dark:bg-slate-800 bg-slate-50 md:px-20  p-5 dark:text-white text-lg ${
        tvSeries.length <= 0 ? "h-screen" : ""
      }`}
    >
      <Helmet>
        <title>Explore TV Series</title>
        <meta name="discription" content="Get  new tv series with genres" />
        <meta name="keyword" content="new series,new tv series,tv series,series,series-genres" />
      </Helmet>
      <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-5xl dark:text-white text-center">
        Discover TV Series
      </h1>
      <Generes
        type="tv"
        selectedGeneres={slectedGeneres}
        setSelectedGeners={setSlectedGeneres}
        generes={generes}
        setGeneres={setGeneres}
        setPage={setPage}
      />
      {tvSeries.length <= 0 ? (
        <h1 className="flex justify-center items-center h-[15rem] text-2xl font-semibold">
          No genre available !
        </h1>
      ) : (
        <>
          <section className="overflow-y-scroll grid md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-3 md:p-14 p-5">
            {tvSeries &&
              tvSeries.map((trending: TrendingInterface) => {
                trending.media_type = "tv";
                return <SingleCard key={trending.id} content={trending} />;
              })}
          </section>
          <CustomPagination prop={{ setPage, page, totalPages }} />
        </>
      )}
    </div>
  );
};

export default TvSeries;
