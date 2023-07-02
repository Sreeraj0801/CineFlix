/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import API from "../API/API";
import Offline from "../Components/Offline";
import CustomPagination from "../Components/Pagination/CustomPagination";
import SingleCard from "../Components/SingleCard";
import useOnline from "../Hooks/useOnline";
import { TrendingInterface } from "./Trending";
import TrendingUI from "../Components/Shimmer/TrendingUI";
import Generes from "../Components/Generes";
import useGenre from "../Hooks/useGenre";

const Movies = () => {
  const [isOnline] = useOnline();
  const { moviesAPI } = API();
  const [movies, setMovies] = useState<[]>([]);
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
      const response = await moviesAPI({ page, genreForURL });
      setTotalPages(response.total_pages);
      setMovies(response.results);
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
  else if (!movies.length && !slectedGeneres.length) return <TrendingUI />;

  return (
    <div
      className={`pb-[6rem] dark:bg-slate-800 bg-slate-50 md:px-20  p-5 dark:text-white text-lg ${
        movies.length <= 0 ? "h-screen" : ""
      }`}
    >
      <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-5xl dark:text-white text-center">
        Discover Movies
      </h1>
      <Generes
        type="movie"
        selectedGeneres={slectedGeneres}
        setSelectedGeners={setSlectedGeneres}
        generes={generes}
        setGeneres={setGeneres}
        setPage={setPage}
      />
      {movies.length <= 0 ? (
        <h1 className="flex justify-center items-center h-[15rem] text-2xl font-semibold">
          No genre available !
        </h1>
      ) : (
        <>
          <section className="overflow-y-scroll grid md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-3 md:p-14 p-5">
            {movies &&
              movies.map((trending: TrendingInterface) => {
                trending.media_type = 'movie'
                return <SingleCard key={trending.id} content={trending} />;
              })}
          </section>
          <CustomPagination prop={{ setPage, page, totalPages }} />
        </>
      )}
    </div>
  );
};

export default Movies;
