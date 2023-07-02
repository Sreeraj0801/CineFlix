/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { unavailable, img_500 } from "../../Config/config";
import Carousel from "../Carousel";

export interface ModalInterface {
  prop: {
    isModalOpen: boolean;
    setIsModalOpen: (arg: boolean) => void;
    details: {
      adult?: boolean;
      backdrop_path?: string;
      belongs_to_collection?: null;
      budget?: number;
      genres?: [{ name: string }];
      homepage?: string;
      id?: number;
      imdb_id?: string;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      production_companies?: [];
      production_countries?: [];
      release_date?: string;
      revenue?: number;
      runtime?: number;
      spoken_languages?: [{ english_name: string }];
      status?: string;
      tagline?: string;
      title?: string;
      name?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      youtube?: string;
      cast?: [];
    };
  };
}

const Content: React.FC<ModalInterface> = ({
  prop: { isModalOpen, setIsModalOpen, details },
}) => {
  console.log(details.cast);

  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = img_500 + details?.poster_path;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div>
      {isModalOpen && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center md:w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative w-full md:max-w-7xl   md:h-fit h-[90vh] ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <div className="md:flex gap-2">
                  <p className="text-3xl font-bold dark:text-white text-black">
                    {details.title || details.name}
                  </p>
                  {details.tagline && (
                    <span className="text-gray-400  text-xl md:text-3xl font-bold ">
                      {" "}
                      : {details.tagline}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="md:grid grid-cols-3 h-[80vh]  overflow-auto ">
                {!loaded && details?.poster_path && (
                  <div className="flex justify-center items-center border-6xl p-2  ">
                    <img
                      className="rounded-t-lg ease-in duration-500   h-[35rem] md:mt-0 mt-10 rounded-6xl cursor-pointer"
                      src="./ImageBackground.jpg"
                      alt="cine poster"
                      loading="lazy"
                      onClick={() => setIsHovered(!isHovered)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                  </div>
                )}
                <div className=" md:flex justify-center items-center rounded-6xl p-2   ">
                  <img
                    className="rounded-t-lg ease-in duration-500   h-[34rem] md:mt-0 mt-10 cursor-pointer"
                    src={
                      isHovered && details?.backdrop_path
                        ? `${img_500 + details?.backdrop_path}`
                        : details?.poster_path
                        ? `${img_500 + details?.poster_path}`
                        : unavailable
                    }
                    alt="cine poster"
                    loading="lazy"
                    onClick={() => setIsHovered(!isHovered)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                </div>
                <div className=" col-span-2 p-2 space-y-3">
                  <div className=" border-2 rounded p-3  min-h-[40%] max-h-fit ]">
                    <div className="md:flex justify-between flex-wrap">
                      <h1 className="text-lg mb-2 font-bold ">
                        {details.original_title} ({details.original_language})
                      </h1>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-bold  md:text-lg">
                        {details?.release_date}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400  md:text-lg">
                      {details?.overview}
                    </p>
                    {details.homepage && (
                      <div className="text-blue-400 text-end underline">
                        <a
                          href={details.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-end"
                        >
                          Streaming site
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-1 ">
                    <div className="flex flex-wrap gap-2 text-xs">
                      Genres:
                      {details?.genres?.map((g) => {
                        return (
                          <h1 className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                            {g.name}
                          </h1>
                        );
                      })}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs ">
                      Spoken Languages :
                      {details?.spoken_languages?.map((l) => {
                        return (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                            {l.english_name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-4/3  md:w-full">
                    <div className="">
                    {details.cast && <Carousel prop={details.cast} />}
                    </div>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        `https://www.youtube.com/watch?v=${details.youtube}` as string
                      }
                      className=" mb-10 flex text-xl font-semibold bg-blue-600 p-1 rounded gap-2 hover:bg-red-600 w-full text-center justify-center items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="38px"
                        height="38px"
                      >
                        <path
                          fill="#FF3D00"
                          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                        />
                        <path fill="#FFF" d="M20 31L20 17 32 24z" />
                      </svg>
                      Watch Trailer{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
