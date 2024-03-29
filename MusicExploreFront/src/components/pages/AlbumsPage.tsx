import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeAlbumsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import { ALBUM } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";
import { setSearchVal } from "../../store/uiSlice";
import Songs from "../Songs";

const AlbumsPage = () => {
  const status = useSelector((state: RootState) => state.ui.status);
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  const data = useSelector((state: RootState) => state.songs.albums);

  const filteredData = data.albums?.filter((item) =>
    item.album.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeAlbumsStart(""));
    dispatch(setSearchVal("albums"));
  }, [dispatch]);

  if (status.error) {
    return <Alert severity="error">{status.message}</Alert>;
  }

  return (
    <Songs
      count={`${data.count} Total albums`}
      songContainer={
        <SongContainer
          songCard={filteredData?.map((item) => (
            <SongCard
              key={item.songs[0].id}
              song={item.songs[0]}
              isSong={false}
              songs={item}
              section={ALBUM}
            />
          ))}
        />
      }
    />
  );
};

export default AlbumsPage;
