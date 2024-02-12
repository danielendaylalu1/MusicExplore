import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeArtistsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
// import SongCardDetail from "../SongCard/SongCardDetail";
import { ARTIST } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";
import { setSearchVal } from "../../store/uiSlice";

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
  console.log(data);

  if (status.error) {
    return <Alert severity="error">{status.message}</Alert>;
  }
  return (
    <div className="songs">
      <div className="songs-container">
        <p>{data.count} Total Artists</p>
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
      </div>
    </div>
  );
};

export default ArtistsPage;
