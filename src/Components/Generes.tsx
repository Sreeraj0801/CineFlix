/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import API from "../API/API";

export interface GenereInterface {
  type: string;
  selectedGeneres: [];
  setSelectedGeners: (newSelectedGeneres: any) => void;
  generes: [];
  setGeneres: (args: any) => void;
  setPage?: (newPage: number) => void;
}
export interface GenereDetailInterface {
  id: string;
  name: string;
}

const Generes: React.FC<GenereInterface> = ({
  type,
  selectedGeneres,
  setSelectedGeners,
  generes,
  setGeneres,
  setPage,
}) => {
  const { generesAPI } = API();
  const getGeneres = async () => {
    try {
      const response: { genres: [] } = await generesAPI(type);
      setGeneres && setGeneres(response.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (gener: { id: string; name: string }) => {
    try {
      setSelectedGeners((prevSelectedGeneres: any[]) => [
        ...prevSelectedGeneres,
        gener,
      ]);
      setGeneres(
        generes.filter((g: GenereDetailInterface) => g.id !== gener.id)
      );
      setPage && setPage(1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = (gener: { id: string; name: string }) => {
    try {
      setSelectedGeners(
        selectedGeneres.filter(
          (selected: GenereDetailInterface) => selected.id !== gener.id
        )
      );
      setGeneres([...generes, gener]);
      setPage && setPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGeneres();
    return () => {
      setGeneres && setGeneres([]);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-2 ">
      {selectedGeneres &&
        selectedGeneres.map((genere: GenereDetailInterface) => {
          return (
            <div key={genere?.id}>
              <div>
                <span
                  id="badge-dismiss-default"
                  className="cursor-pointer rounded-sm inline-flex items-center px-2 py-1 mr-2 text-sm font-medium dark:text-green-900 bg-green-300 "
                >
                  {genere.name}
                  <button
                    type="button"
                    className="inline-flex items-center p-0.5 ml-2 text-sm text-white bg-transparent  hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300 rounded-full"
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                    onClick={() => {
                      handleRemove(genere);
                    }}
                  >
                    <div className="h-5 w-5  flex justify-center items-center text-sm rounded-full bg-green-600 text-white pb-[.15rem] ">
                      &#128473;
                    </div>
                    <span className="sr-only">Remove badge</span>
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      {generes &&
        generes.map((genere: GenereDetailInterface) => {
          return (
            <button
              key={genere?.id}
              onClick={() => {
                handleAdd(genere);
              }}
            >
              <div>
                <span
                  id="badge-dismiss-default"
                  className="cursor-pointer rounded-sm inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-950 bg-blue-300  dark:bg-blue-900 dark:text-blue-300"
                >
                  {genere.name}
                </span>
              </div>
            </button>
          );
        })}
    </div>
  );
};

export default Generes;

