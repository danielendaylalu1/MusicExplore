import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeArtistsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import { ARTIST } from "../../utils";
import SongContainer from "../SongCard/SongContainer";

const ArtistsPage = () => {
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  const data = useSelector((state: RootState) => state.songs.artists);

  const filteredData = data.filter((item) =>
    item.artist.toLowerCase().includes(searchValue)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeArtistsStart(""));
  }, [dispatch]);
  console.log("artists page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        <SongContainer
          songCard={filteredData.map((item) => (
            <SongCard
              key={item.artist}
              header={<SongCardDetail song={item.songs[0]} section={ARTIST} />}
              isSong={false}
              songs={item.songs}
              section={ARTIST}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default ArtistsPage;
