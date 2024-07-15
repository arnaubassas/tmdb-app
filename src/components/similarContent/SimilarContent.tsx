import { useEffect, useState } from "react";
import { SeriesListRequest } from "../../interfaces";
import { getSimilarById } from "../../services";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import SeriesCard from "../seriesCard/SeriesCard";
import "./similarContent.scss";
interface SimilarContentProps {
  id: number;
}

const SimilarContent: React.FC<SimilarContentProps> = ({ id }) => {
  const [similar, setSimilar] = useState<SeriesListRequest[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    getSimilarById(id)
      .then((data) => {
        setSimilar(data);
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) return <Error />;
  if (!similar) return <Loading />;
  return (
    <div className="similarContent">
      <div className="similarContent__title">Similar Suggestions</div>
      <div className="similarContent__similarSlider">
        {similar.map((serie) => (
          <SeriesCard
            key={serie.id}
            id={serie.id}
            name={serie.name}
            src={serie.poster_path}
            date={serie.first_air_date}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarContent;
