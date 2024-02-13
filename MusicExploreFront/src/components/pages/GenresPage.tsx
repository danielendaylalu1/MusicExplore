import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeGenresStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import { GENRE } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";
import { setSearchVal } from "../../store/uiSlice";
import Songs from "../Songs";

const GenresPage = () => {
  const status = useSelector((state: RootState) => state.ui.status);
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  const data = useSelector((state: RootState) => state.songs.genres);

  const filteredData = data.genres.filter((item) =>
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
    <Songs
      count={`${data.count} Total Genres`}
      songContainer={
        <SongContainer
          songCard={filteredData.map((item) => (
            <SongCard
              key={item.genre}
              song={item.songs[0]}
              isSong={false}
              songs={item}
              section={GENRE}
            />
          ))}
        />
      }
    />
  );
};

export default GenresPage;
