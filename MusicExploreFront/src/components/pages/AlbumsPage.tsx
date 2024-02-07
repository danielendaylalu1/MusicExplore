import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeAlbumsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import { ALBUM } from "../../utils";
import SongContainer from "../SongCard/SongContainer";

const AlbumsPage = () => {
  const data = useSelector((state: RootState) => state.songs.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeAlbumsStart(""));
  }, [dispatch]);
  console.log("albums page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        <SongContainer
          songCard={data.map((item) => (
            <SongCard
              key={item.album.artist}
              header={<SongCardDetail song={item.songs[0]} section={ALBUM} />}
              isSong={false}
              songs={item.songs}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default AlbumsPage;
