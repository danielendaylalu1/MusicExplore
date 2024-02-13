import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeArtistsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import { ARTIST } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";
import { setSearchVal } from "../../store/uiSlice";
import Songs from "../Songs";

const ArtistsPage = () => {
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  const status = useSelector((state: RootState) => state.ui.status);
  const data = useSelector((state: RootState) => state.songs.artists);

  const filteredData = data.artists.filter((item) =>
    item.artist.toLowerCase().includes(searchValue)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeArtistsStart(""));
    dispatch(setSearchVal("artists"));
  }, [dispatch]);

  if (status.error) {
    return <Alert severity="error">{status.message}</Alert>;
  }
  return (
    <Songs
      count={`${data.count} Total Artists`}
      songContainer={
        <SongContainer
          songCard={filteredData.map((item) => (
            <SongCard
              key={item.artist}
              song={item.songs[0]}
              isSong={false}
              songs={item}
              section={ARTIST}
            />
          ))}
        />
      }
    />
  );
};

export default ArtistsPage;
