import { useEffect } from "react";

import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";

import { intializeGenresStart } from "../store/songSlice";
import { RootState } from "../store/store";
import SongCardDetail from "./SongCardDetail";
import SongCardOption from "./SongCardOption";

const GenresPage = () => {
  const data = useSelector((state: RootState) => state.songs.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeGenresStart());
  }, [dispatch]);
  console.log("genres page runs", data);
  return (
    <div className="songs">
      <div className="songs-container">
        {data.map((item) => (
          <SongCard
            key={item.genre}
            children1={
              <SongCardDetail
                title={item.genre}
                section="genre"
                artist={item.genre}
              />
            }
            children2={<SongCardOption isSong={false} />}
            children3={
              <ul className="songs-list-card">
                {item.songs.map((item) => (
                  <div key={item.id}>
                    <li className="song-list">
                      <SongCardDetail
                        title={item.title}
                        section="song"
                        artist={item.artist}
                      />
                      <SongCardOption isSong={true} />
                    </li>
                  </div>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
