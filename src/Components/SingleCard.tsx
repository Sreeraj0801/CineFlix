/* eslint-disable react-hooks/exhaustive-deps */
import { TrendingInterface } from "../Page/Trending";
import { unavailable, img_300 } from "../Config/config";
import { useEffect, useState } from "react";
import Content from "./Modal/Content";
import API from "../API/API";
import ContentUI from "./Shimmer/ContentUI";

export interface SingleCardProps {
  content: TrendingInterface;
}

const SingleCard: React.FC<SingleCardProps> = ({ content }) => {
  const [loaded, setLoaded] = useState(false);
  const { contentAPI,youtubeAPI,carouselAPI } = API();

  useEffect(() => {
    const image = new Image();
    image.src = img_300 + content?.poster_path;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShimmerModalOpen, setIsShimmerModalOpen] = useState(false);
  const [details, setDetails] = useState({});

  const toggleModal = async () => {
    try {
      setIsShimmerModalOpen(true);
      if (content?.id && content.media_type) {
        const response = await contentAPI({id: content.id,media_type: content.media_type,});
        const youtubeVideo = await youtubeAPI({id:content.id,media_type:content.media_type}) ;
        const cast = await carouselAPI({id:content.id,media_type:content.media_type});
        setDetails({...response,youtube:youtubeVideo?.results[0]?.key,cast:[...cast.cast]});
        setIsShimmerModalOpen(false);
        setIsModalOpen(true);
      }
      
      setIsShimmerModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={toggleModal}>
        <div className="relative z-5">
          <div className="dark:hover:bg-slate-600 hover:bg-slate-300 cursor-pointer md:min-h-[32rem] md:max-h-fit p-3 bg-gray-100 border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
            <span
              className={`absolute top-2 right-2 inline-flex items-center justify-center w-12 h-12 text-sm font-bold dark:text-blue-100 ${
                typeof content?.vote_average === "number" &&
                content?.vote_average > 6
                  ? "dark:bg-blue-700 bg-gray-300 text-gray-700"
                  : "bg-red-600 text-white"
              }   rounded-full `}
            >
              {content?.vote_average || "*"}
            </span>
            {content?.adult && (
              <span
                className={`absolute top-2 bg-red-600 rounded  left-2 inline-flex items-center justify-center w-12 h-12 text-sm font-bold dark:text-blue-10  `}
              >
                18+
              </span>
            )}

            <div className="0">
              {!loaded && content?.poster_path && (
                <img
                  src="./ImageBackground.jpg"
                  alt="Placeholder"
                  className="w-full backdrop-blur-[100px] h-64  filter blur-sm"
                />
              )}
              {
                <img
                  className="rounded-t-lg ease-in duration-500"
                  src={
                    content?.poster_path
                      ? `${img_300 + content?.poster_path}`
                      : unavailable
                  }
                  alt="cine poster"
                  loading="lazy"
                />
              }
            </div>
            <div className="p-5 grid gap-2">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {content?.original_title || content?.name}
              </h5>
              <div className="flex flex-wrap justify-between font-semibold text-gray-400 text-xl">
                <h1>{content?.media_type === "tv" ? "TV series" : "Movie"}</h1>
                <h2>{content?.release_date}</h2>
              </div>
            </div>
          </div>
        </div>
      </button>
      {isShimmerModalOpen ? (
        <ContentUI prop={{ isShimmerModalOpen, setIsShimmerModalOpen }} />
      ) : (
        <>
          {(isModalOpen && details) && (
            <Content
              prop={{
                isModalOpen,
                setIsModalOpen,
                 details,
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default SingleCard;
