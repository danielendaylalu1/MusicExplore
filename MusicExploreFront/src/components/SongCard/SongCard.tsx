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
import {
  pointer,
  songCardStyle,
  songCardWrapper,
  songList,
  songsListCard,
  w100,
} from "../../style/style";

export interface songPageProps {
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

  return (
    <div css={[songCardWrapper, w100]}>
      <div
        css={[songCardStyle, w100]}
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
        <ul css={[songsListCard, w100]}>
          {songs?.songs?.map((item) => (
            <div key={item.id}>
              <li
                css={[songList, pointer]}
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
