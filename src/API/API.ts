import axiosInstance from "./baseURL";
const API = () => {
  const secretKey = import.meta.env.VITE_TMDB_API_KEY;

  const trendingAPI = async (page: number) => {
    try {
      const url =
        `trending/all/day?api_key=${secretKey}&page=${page}` as string;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };
  //-----------------
  const moviesAPI = async ({
    page,
    genreForURL,
  }: {
    page: number;
    genreForURL: string;
  }) => {
    try {
      const url =
        `discover/movie?api_key=${secretKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}` as string;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };
  //---------------
  const tvSeriesAPI = async ({
    page,
    genreForURL,
  }: {
    page: number;
    genreForURL: string;
  }) => {
    try {
      const url =
        `discover/tv?api_key=${secretKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}` as string;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };

  const generesAPI = async (type: string) => {
    try {
      const url =
        `/genre/${type}/list?api_key=${secretKey}&language=en-US` as string;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };
  const searchAPI = async ({
    type,
    searchText,
    page,
  }: {
    type: number;
    searchText: string;
    page: number;
  }) => {
    try {
      let genre;
      if (type === 0) {
        genre = "movie";
      } else {
        genre = "tv";
      }
      const url =
        `search/${genre}?api_key=${secretKey}&language=en-US&query=${searchText}}&page=${page}&include_adult=false` as string;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };

  const contentAPI = async ({
    media_type,
    id,
  }: {
    media_type: string;
    id: number;
  }) => {
    try {
      const url = `${media_type}/${id}?api_key=${secretKey}` as string;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };

  const youtubeAPI = async ({
    id,
    media_type,
  }: {
    id: number;
    media_type: string;
  }) => {
    try {
      const url = `${media_type}/${id}/videos?api_key=${secretKey}&language=en-US`;
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      throw { error };
    }
  };

  const carouselAPI = async ({
    id,
    media_type,
  }: {
    id: number;
    media_type: string;
  }) => {
    try {
      const url = `${media_type}/${id}/credits?api_key=${secretKey}&language=en-US`;
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
    searchAPI,
    contentAPI,
    youtubeAPI,
    carouselAPI,
  };
};

export default API;
