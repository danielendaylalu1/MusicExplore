import speakerIcon from "../assets/speaker-icon.png";
import {
  displayCardArtist,
  displayCardDetail,
  displayCardIcon,
  displayCardLeft,
  displayCardTitle,
  displayCardType,
  itemHover,
  pointer,
} from "../style/style";

const DisplayHeader = () => {
  return (
    <div css={displayCardLeft}>
      <img src={speakerIcon} alt="speaker icon" css={displayCardIcon} />
      <div css={displayCardDetail}>
        <h3 css={[displayCardTitle, itemHover, pointer]}>Song</h3>
        <p css={[displayCardArtist, itemHover, pointer]}>Artist</p>
        <p css={[displayCardType, pointer]}>song</p>
      </div>
    </div>
  );
};

export default DisplayHeader;
