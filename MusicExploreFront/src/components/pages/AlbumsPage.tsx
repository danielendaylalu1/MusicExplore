import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeAlbumsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import { ALBUM } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";

const AlbumsPage = () => {
  const { searchValue, status } = useSelector((state: RootState) => state.ui);
  const data = useSelector((state: RootState) => state.songs.albums);

  const filteredData = data.filter((item) =>
    item.album.name.toLowerCase().includes(searchValue)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeAlbumsStart(""));
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
              key={item.songs[0].id}
              header={<SongCardDetail song={item.songs[0]} section={ALBUM} />}
              isSong={false}
              songs={item.songs}
              section={ALBUM}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default AlbumsPage;
