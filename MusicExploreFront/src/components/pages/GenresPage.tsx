import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeGenresStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import { GENRE } from "../../utils";
import SongContainer from "../SongCard/SongContainer";
import Alert from "@mui/material/Alert";

const GenresPage = () => {
  const { searchValue, status } = useSelector((state: RootState) => state.ui);
  const data = useSelector((state: RootState) => state.songs.genres);

  const filteredData = data.filter((item) =>
    item.genre.toLowerCase().includes(searchValue)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeGenresStart(""));
    // console.log("genres efeccccccccccct page runs");
  }, [dispatch]);

  if (status.error) {
    return <Alert severity="error">{status.message}</Alert>;
  }
  // console.log("genres page runs", data);
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
