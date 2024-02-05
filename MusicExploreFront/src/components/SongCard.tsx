import { FC, ReactNode } from "react";

export interface songPageProps {
  children1: ReactNode;
  children2: ReactNode;
}

const SongCard: FC<songPageProps> = ({ children1, children2 }) => {
  return (
    <div className="song-card">
      {children1}
      {children2}
    </div>
  );
};

export default SongCard;
