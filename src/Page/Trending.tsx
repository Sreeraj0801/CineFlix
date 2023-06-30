import Offline from "../Components/Offline";
import useOnline from "../Hooks/useOnline";
import API from "../API/API";
import { useEffect, useState } from "react";
import TrendingUI from "../Components/Shimmer/TrendingUI";
import SingleCard from "../Components/SingleCard";
import CustomPagination from "../Components/Pagination/CustomPagination";

export interface TrendingInterface {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: [];
  media_type?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

const Trending = () => {
  const { trendingAPI } = API();
  const [isOnline] = useOnline();
  const [trendings, setTrendings] = useState([]);
  const [page, setPage] = useState(1);

  const getTrending = async () => {
    try {
      const response = await trendingAPI(page);
      setTrendings(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
    window.scroll(0, 0);
  }, [page]);

  if (!isOnline) return <Offline />;
  else if (!trendings.length) return <TrendingUI />;

  return (
    <div className="pb-[6rem]  dark:bg-slate-800 bg-slate-50 md:px-20  p-5 dark:text-white text-lg  ">
      <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-5xl dark:text-white text-center">
        Trending
      </h1>
      <section className="overflow-y-scroll grid md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-3 md:p-14 p-5">
        {trendings &&
          trendings.map((trending: TrendingInterface) => {
            return <SingleCard key={trending.id} content={trending} />;
          })}
      </section>
      <CustomPagination prop={{ setPage, page }} />
    </div>
  );
};

export default Trending;
