import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeGenresStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
// import { initializeSongDisplay } from "../../store/songDisplaySlice";

const GenresPage = () => {
  const data = useSelector((state: RootState) => state.songs.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeGenresStart(""));
    // dispatch(initializeSongDisplay(data[0]?.songs[0]));
  }, [dispatch]);
  console.log("genres page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.genre}
            header={<SongCardDetail song={item.songs[0]} section="album" />}
            isSong={false}
            songs={item.songs}
          />
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
