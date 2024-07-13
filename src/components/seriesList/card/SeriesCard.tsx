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
    <div className="container">
      <img
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${src}`}
        alt="poster"
      />
      <div className="information">
        <div className="title">{name}</div>
        <div className="date">
          {newdate.toLocaleDateString(language, {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
