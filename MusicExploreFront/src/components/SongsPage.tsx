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
    console.log("songs page runs");
  }, [dispatch]);
  console.log("songs page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.id}
            children1={
              <SongCardDetail
                title={item.title}
                section="song"
                artist={item.artist}
              />
            }
            children2={<SongCardOption isSong={true} />}
          />
        ))}
      </div>
    </div>
  );
};

export default Songs;
