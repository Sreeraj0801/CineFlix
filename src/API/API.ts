import axiosInstance from "./baseURL";
const API = () => {
  const secretKey = import.meta.env.VITE_TMDB_API_KEY;

  const trendingAPI = async (page: number) => {
    try {
      const url = `trending/all/day?api_key=${secretKey}&page=${page}`;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };
  const moviesAPI = async ({
    page,
    genreForURL,
  }: {
    page: number;
    genreForURL: string;
  }) => {
    try {
      const url = `discover/movie?api_key=${secretKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };

  const tvSeriesAPI = async ({
    page,
    genreForURL,
  }: {
    page: number;
    genreForURL: string;
  }) => {
    try {
      const url = `discover/tv?api_key=${secretKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };

  const generesAPI = async (type: string) => {
    try {
      const url = `/genre/${type}/list?api_key=${secretKey}&language=en-US`;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };
  return {
    trendingAPI,
    moviesAPI,
    tvSeriesAPI,
    generesAPI,
  };
};

export default API;
