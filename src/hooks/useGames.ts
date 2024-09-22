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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
  useData<Game>("/games", { 
    params: { 
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id 
    }}, 
    [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;