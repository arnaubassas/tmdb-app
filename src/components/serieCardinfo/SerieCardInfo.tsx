import { language } from "../../const";
import "./serieCardInfo.scss";

interface SerieCardInfoProps {
  name: string;
  src: string;
  date: string;
}
const SerieCardInfo: React.FC<SerieCardInfoProps> = ({ name, src, date }) => {
  const newdate = new Date(date);
  return (
    <>
      <img
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${src}`}
        alt="poster"
      />
      <div className="informationSerie">
        <div className="informationSerie__title">{name}</div>
        <div className="informationSerie__date">
          {newdate.toLocaleDateString(language, {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </>
  );
};

export default SerieCardInfo;
