import { FC, ReactNode, useState } from "react";
import SongCardOption from "./SongCardOption";
import SongCardDetail from "./SongCardDetail";
import { Song } from "../../types";

export interface songPageProps {
  header: ReactNode;
  isSong: boolean;
  songs?: Song[];
  showList?: boolean;
  songId?: string;
}

const SongCard: FC<songPageProps> = ({ header, isSong, songs, songId }) => {
  const [showList, setShowList] = useState(false);

  const showListHandler = (showList: boolean) => {
    setShowList(!showList);
  };
  return (
    <div className="song-card-wrapper">
      <div className="song-card">
        {header}
        <SongCardOption
          isSong={isSong}
          songId={songId}
          showList={showList}
          setShowList={showListHandler}
        />
      </div>
      {showList && (
        <ul className="songs-list-card">
          {songs?.map((song) => (
            <div key={song.id}>
              <li className="song-list pointer">
                <SongCardDetail song={song} section="song" />
                <SongCardOption isSong={true} songId={song.id} />
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongCard;
