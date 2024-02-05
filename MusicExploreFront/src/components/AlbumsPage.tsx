import { useEffect } from "react";
import { getAlbums } from "../services/songService";

const AlbumsPage = () => {
  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        const songs = await getAlbums("");
        console.log(songs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSongs();
  }, []);
  return <div>AlbumsPage</div>;
};

export default AlbumsPage;
