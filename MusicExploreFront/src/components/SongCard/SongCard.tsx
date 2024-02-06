import { FC, ReactNode, useState } from "react";
import SongCardOption from "./SongCardOption";
import SongCardDetail from "./SongCardDetail";
import { Song } from "../../types";

export interface songPageProps {
  header: ReactNode;
  isSong: boolean;
  songs?: Song[];
  showList?: boolean;
}

const SongCard: FC<songPageProps> = ({ header, isSong, songs }) => {
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
          showList={showList}
          setShowList={showListHandler}
        />
      </div>
      {showList && (
        <ul className="songs-list-card">
          {songs?.map((song) => (
            <div key={song.id}>
              <li className="song-list">
                <SongCardDetail
                  title={song.title}
                  section="song"
                  artist={song.artist}
                />
                <SongCardOption isSong={true} />
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongCard;
