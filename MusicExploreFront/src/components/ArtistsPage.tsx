import { useEffect } from "react";

import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";

import { intializeAlbumsStart } from "../store/songSlice";
import { RootState } from "../store/store";
import SongCardDetail from "./SongCardDetail";
import SongCardOption from "./SongCardOption";

const ArtistsPage = () => {
  const data = useSelector((state: RootState) => state.songs.artists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeAlbumsStart());
  }, [dispatch]);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.artist}
            children1={
              <SongCardDetail
                title={item.artist}
                section="artist"
                artist={item.artist}
              />
            }
            children2={<SongCardOption isSong={false} />}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
