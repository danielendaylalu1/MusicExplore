import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeSongsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
// import SongCardDetail from "../SongCard/SongCardDetail";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";
import { setSearchVal } from "../../store/uiSlice";

const SongsPage = () => {
  const status = useSelector((state: RootState) => state.ui.status);
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  const data = useSelector((state: RootState) => state.songs.songs);
  const searchVal = useSelector((state: RootState) => state.ui.searchVal);

  const filteredData = data.filter((item) => {
    if (searchVal === "albums") {
      return item.album?.toLowerCase().includes(searchValue);
    }
    if (searchVal === "artists") {
      return item.artist?.toLowerCase().includes(searchValue);
    }
    if (searchVal === "genres") {
      return item.genre?.toLowerCase().includes(searchValue);
    }
    return item.title.toLowerCase().includes(searchValue);
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeSongsStart());
    dispatch(setSearchVal("songs"));
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
              key={item.id}
              song={item}
              // header={<SongCardDetail song={item} section="Song" />}
              isSong={true}
              songID={item.id}
              section="Song"
            />
          ))}
        />
      </div>
    </div>
  );
};

export default SongsPage;
