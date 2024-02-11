import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeGenresStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import { GENRE } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";
import { setSearchVal } from "../../store/uiSlice";

const GenresPage = () => {
  const status = useSelector((state: RootState) => state.ui.status);
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  const data = useSelector((state: RootState) => state.songs.genres);

  const filteredData = data.filter((item) =>
    item.genre.toLowerCase().includes(searchValue)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeGenresStart(""));
    dispatch(setSearchVal("genres"));
  }, [dispatch]);

  if (status.error) {
    return <Alert severity="error">{status.message}</Alert>;
  }

  return (
    <div className="songs">
      <div className="songs-container">
        <SongContainer
          songCard={filteredData.map((item) => (
            <SongCard
              key={item.genre}
              header={<SongCardDetail song={item.songs[0]} section={GENRE} />}
              isSong={false}
              songs={item.songs}
              section={GENRE}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default GenresPage;
