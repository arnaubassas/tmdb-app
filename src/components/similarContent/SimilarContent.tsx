import { useEffect, useState } from "react";
import { SeriesListRequest } from "../../interfaces";
import { getSimilarById } from "../../services";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import "./similarContent.scss";
import Slider from "../slider/Slider";
import Card from "../card/Card";
import { dateModify } from "../../utils";
import { Link } from "react-router-dom";
import Image from "../img/Image";
import { imageUrl } from "../../const";

interface SimilarContentProps {
  id: number;
}

const SimilarContent: React.FC<SimilarContentProps> = ({ id }) => {
  const [similar, setSimilar] = useState<SeriesListRequest[]>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getSimilarById(id)
      .then((data) => {
        setSimilar(data);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loading />;
  if (error || !similar) return <Error />;
  return (
    <div className="similarContent">
      <div className="similarContent__title">Similar Suggestions</div>
      <Slider>
        {similar.map((serie) => (
          <Card key={serie.id} size="small">
            <Link to={`/serie/${serie.id}`} className="similarContent__link">
              <Image
                src={`${imageUrl}${serie.poster_path}`}
                alt="poster"
                size="small"
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
