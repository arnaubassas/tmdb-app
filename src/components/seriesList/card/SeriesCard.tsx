import { Link } from "react-router-dom";
import { language } from "../../../const";
import "./SeriesCard.scss";

interface SeriesCardProps {
  id: number;
  name: string;
  src: string;
  date: string;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ id, name, src, date }) => {
  const newdate = new Date(date);

  return (
    <Link to={`/serie/${id}`} className="seriesCard">
      <img
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${src}`}
        alt="poster"
      />
      <div className="seriesCard__information">
        <div className="seriesCard__information__title">{name}</div>
        <div className="seriesCard__information__date">
          {newdate.toLocaleDateString(language, {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </Link>
  );
};

export default SeriesCard;
