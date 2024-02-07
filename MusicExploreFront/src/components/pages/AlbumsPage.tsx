import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeAlbumsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
// import { initializeSongDisplay } from "../../store/songDisplaySlice";

const ArtistsPage = () => {
  const data = useSelector((state: RootState) => state.songs.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeAlbumsStart(""));
    // dispatch(initializeSongDisplay(data[0]?.songs[0]));
  }, [dispatch]);

  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.album.artist}
            header={<SongCardDetail song={item.songs[0]} section="Album" />}
            isSong={false}
            songs={item.songs}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
