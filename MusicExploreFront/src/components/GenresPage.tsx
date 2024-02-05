import { useEffect } from "react";
import { getGenres } from "../services/songService";

const GenresPage = () => {
  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        const songs = await getGenres("");
        console.log(songs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSongs();
  }, []);
  return <div>GenresPage</div>;
};

export default GenresPage;
