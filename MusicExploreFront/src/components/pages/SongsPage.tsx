import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeSongsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import SongContainer from "../SongCard/SongContainer";

const SongsPage = () => {
  const data = useSelector((state: RootState) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeSongsStart());
  }, [dispatch]);
  console.log("songs page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        <SongContainer
          songCard={data.map((item) => (
            <SongCard
              key={item.id}
              header={<SongCardDetail song={item} section="Song" />}
              isSong={true}
              songId={item.id}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default SongsPage;
