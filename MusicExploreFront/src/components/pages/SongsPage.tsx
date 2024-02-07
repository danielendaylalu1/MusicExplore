import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeSongsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
// import { initializeSongDisplay } from "../../store/songDisplaySlice";

const SongsPage = () => {
  const data = useSelector((state: RootState) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeSongsStart());
    // dispatch(initializeSongDisplay(data[0]));
  }, [dispatch]);

  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.id}
            header={<SongCardDetail song={item} section="Song" />}
            isSong={true}
            songId={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsPage;
