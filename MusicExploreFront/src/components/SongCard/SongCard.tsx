import { FC, useState } from "react";
import SongCardOption from "./SongCardOption";
import SongCardDetail from "./SongCardDetail";
import { Song, Statistic } from "../../types";
import { useDispatch } from "react-redux";
import {
  setAlbumTypeDisplay,
  setArtistTypeDisplay,
  setGenreTypeDisplay,
  setSongTypeDisplay,
} from "../../store/songDisplaySlice";

export interface songPageProps {
  // header: ReactNode;
  isSong: boolean;
  song: Song;
  songs?: {
    songs: Song[];
    statistic: Statistic;
  };
  showList?: boolean;
  songID?: string;
  section: string;
}

const SongCard: FC<songPageProps> = ({
  // header,
  isSong,
  songs,
  songID,
  section,
  song,
}) => {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  const showListHandler = (showList: boolean) => {
    setShowList(!showList);
  };

  console.log("new console", song, section, songs);
  return (
    <div className="song-card-wrapper">
      <div
        className="song-card"
        onClick={() => {
          switch (section) {
            case "Song":
              dispatch(
                setSongTypeDisplay({
                  section,
                  song,
                })
              );
              break;
            case "Album":
              dispatch(
                setAlbumTypeDisplay({
                  section,
                  song: {
                    album: {
                      name: song.album,
                      artist: song.artist,
                    },
                    songs: songs?.songs,
                    statistic: songs?.statistic,
                    // statistic
                  },
                })
              );
              break;
            case "Artist":
              dispatch(
                setArtistTypeDisplay({
                  section,
                  song: {
                    artist: song.artist,
                    songs: songs?.songs,
                    statistic: songs?.statistic,
                  },
                })
              );
              break;

            case "Genre":
              dispatch(
                setGenreTypeDisplay({
                  section,
                  song: {
                    genre: song.genre,
                    songs: songs?.songs,
                    statistic: songs?.statistic,
                  },
                })
              );
              break;
          }
        }}
      >
        <SongCardDetail song={song} section={section} />
        <SongCardOption
          isSong={isSong}
          songID={songID}
          showList={showList}
          setShowList={showListHandler}
          section={section}
        />
      </div>
      {showList && (
        <ul className="songs-list-card">
          {songs?.songs?.map((item) => (
            <div key={item.id}>
              <li
                className="song-list pointer"
                onClick={() => {
                  dispatch(
                    setSongTypeDisplay({
                      section: "Song",
                      song: item,
                    })
                  );
                }}
              >
                <SongCardDetail song={item} section="song" />
                <SongCardOption
                  isSong={true}
                  songID={item.id}
                  section={section}
                />
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongCard;
