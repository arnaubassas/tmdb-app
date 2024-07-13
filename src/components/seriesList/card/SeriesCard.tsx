import { formatDate } from "../../../functions";
import { CardListProps } from "../../../interfaces";
import "./card.scss";

const SeriesCard: React.FC<CardListProps> = ({ id, name, src, date }) => {
  return (
    <div className="container">
      <img
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${src}`}
        alt="poster"
      />
      <div className="information">
        <div className="title">{name}</div>
        <div className="date">{formatDate(date)}</div>
      </div>
    </div>
  );
};

export default SeriesCard;
