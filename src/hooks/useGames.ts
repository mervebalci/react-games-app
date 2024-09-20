import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} [];
  metacritic: number;
}
/* parent_platform is not Platform[] array.
It is an array of objects where each object has a property called platform of type Platform. */


const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;