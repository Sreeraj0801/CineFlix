import { GenereDetailInterface } from "../Components/Generes";
const useGenre = (selectedGenres: GenereDetailInterface[]) => {
  if (!selectedGenres.length) return null;
  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
