import { useEffect } from "react";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeGenresStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCardDetail";

const GenresPage = () => {
  const data = useSelector((state: RootState) => state.songs.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeGenresStart());
  }, [dispatch]);
  console.log("genres page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.genre}
            header={
              <SongCardDetail
                title={item.genre}
                section="album"
                artist={item.genre}
              />
            }
            isSong={false}
            songs={item.songs}
          />
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
