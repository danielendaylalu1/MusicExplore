import { useEffect } from "react";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeArtistsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCardDetail";

const ArtistsPage = () => {
  const data = useSelector((state: RootState) => state.songs.artists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeArtistsStart());
  }, [dispatch]);
  console.log("artists page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.artist}
            header={
              <SongCardDetail
                title={item.artist}
                section="Artist"
                artist={item.artist}
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

export default ArtistsPage;
