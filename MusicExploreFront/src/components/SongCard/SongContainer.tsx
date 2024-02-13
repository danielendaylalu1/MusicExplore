import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Spinner from "../Spinner";
import { songsContainerStyle, w100 } from "../../style/style";

interface SongContainerProps {
  songCard: ReactNode;
}

const SongContainer: FC<SongContainerProps> = ({ songCard }) => {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);
  return (
    <div css={[songsContainerStyle, w100]}>
      {isLoading ? <Spinner /> : <>{songCard}</>}
    </div>
  );
};

export default SongContainer;
