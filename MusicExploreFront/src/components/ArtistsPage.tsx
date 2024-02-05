import { useEffect } from "react";
import { getArtists } from "../services/songService";

const ArtistsPage = () => {
  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        const songs = await getArtists("");
        console.log(songs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSongs();
  }, []);
  return <div>ArtistsPage</div>;
};

export default ArtistsPage;
