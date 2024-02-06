import { useEffect } from "react";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeAlbumsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCardDetail";

const ArtistsPage = () => {
  const data = useSelector((state: RootState) => state.songs.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeAlbumsStart());
  }, [dispatch]);

  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.album.artist}
            header={
              <SongCardDetail
                title={item.album.name}
                section="Album"
                artist={item.album.artist}
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
