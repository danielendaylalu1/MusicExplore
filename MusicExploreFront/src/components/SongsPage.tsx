import { useEffect } from "react";
import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";

import { intializeSongsStart } from "../store/songSlice";
import { RootState } from "../store/store";
import SongCardDetail from "./SongCardDetail";
import SongCardOption from "./SongCardOption";

const Songs = () => {
  const data = useSelector((state: RootState) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeSongsStart());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard key={item.id}>
            <SongCardDetail
              title={item.title}
              section="song"
              artist={item.artist}
            />
            <SongCardOption isSong={true} />
          </SongCard>
        ))}
      </div>
    </div>
  );
};

export default Songs;
