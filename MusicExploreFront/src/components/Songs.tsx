import { ReactNode, FC } from "react";
import { songsContainerStyle, textGreen, w100 } from "../style/style";

interface SongsProps {
  count: string;
  songContainer: ReactNode;
}

const Songs: FC<SongsProps> = ({ songContainer, count }) => {
  return (
    <div css={w100}>
      <div css={[songsContainerStyle, w100]}>
        <p css={textGreen}>{count}</p>
        {songContainer}
      </div>
    </div>
  );
};

export default Songs;
