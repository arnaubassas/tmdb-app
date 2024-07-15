import { useEffect, useState } from "react";
import { SeriesListRequest } from "../../interfaces";
import { getSimilarById } from "../../services";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import "./similarContent.scss";
import Slider from "../slider/Slider";
import Card from "../card/Card";
import { dateModify } from "../../functions";
import { Link } from "react-router-dom";

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
      <Slider>
        {similar.map((serie) => (
          <Card key={serie.id}>
            <Link to={`/serie/${serie.id}`} className="similarContent__link">
              <img
                src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${serie.poster_path}`}
                alt="poster"
              />
              <div className="similarContent__link__informationSerie">
                <div className="similarContent__link__informationSerie__title">
                  {serie.name}
                </div>
                <div className="similarContent__link__informationSerie__date">
                  {dateModify(serie.first_air_date)}
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarContent;
