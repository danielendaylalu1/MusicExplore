import { useEffect } from "react";
import SongCard from "../SongCard/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { intializeSongsStart } from "../../store/songSlice";
import { RootState } from "../../store/store";
import SongCardDetail from "../SongCard/SongCardDetail";
import SongContainer from "../SongCard/SongContainer";

const SongsPage = () => {
  const searchValue = useSelector((state: RootState) => state.ui.searchValue);
  // const [search, setSearch] = useState(searchValue);
  const data = useSelector((state: RootState) => state.songs.songs);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeSongsStart());
  }, [dispatch]);

  return (
    <div className="songs">
      <div className="songs-container">
        <SongContainer
          songCard={filteredData.map((item) => (
            <SongCard
              key={item.id}
              header={<SongCardDetail song={item} section="Song" />}
              isSong={true}
              songID={item.id}
              section="song"
            />
          ))}
        />
      </div>
    </div>
  );
};

export default SongsPage;
