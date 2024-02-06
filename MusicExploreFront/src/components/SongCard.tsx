import { FC, ReactNode } from "react";

export interface songPageProps {
  children1: ReactNode;
  children2: ReactNode;
  children3?: ReactNode;
}

const SongCard: FC<songPageProps> = ({ children1, children2, children3 }) => {
  return (
    <div className="song-card-wrapper">
      <div className="song-card">
        {children1}
        {children2}
      </div>
      {children3}
    </div>
  );
};

export default SongCard;
