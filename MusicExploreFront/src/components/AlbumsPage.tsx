import { useEffect } from "react";
import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";

import { intializeAlbumsStart } from "../store/songSlice";
import { RootState } from "../store/store";
import SongCardDetail from "./SongCardDetail";
import SongCardOption from "./SongCardOption";

const AlbumsPage = () => {
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
            children1={
              <SongCardDetail
                title={item.album.name}
                section="album"
                artist={item.album.artist}
              />
            }
            children2={<SongCardOption isSong={false} />}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsPage;
