import { useEffect, useState } from "react";
import { DetailRequest } from "../../interfaces";
import { getSerieById } from "../../services";
import { useParams } from "react-router-dom";
import SerieGeneralInformation from "../../components/SerieGeneralInformation/SerieGeneralInformation";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import SimilarContent from "../../components/similarContent/SimilarContent";
import Cast from "../../components/cast/Cast";
import CurrentSeason from "../../components/currentSeason/CurrentSeason";

const SeriesDetail = () => {
  const [serie, setSerie] = useState<DetailRequest>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getSerieById(id)
        .then((data) => {
          setSerie(data);
        })
        .catch(() => setError(true))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) return <Loading />;
  if (error || !serie) return <Error />;

  return (
    <>
      <SerieGeneralInformation
        name={serie.name}
        date={serie.first_air_date}
        poster={serie.poster_path}
        overview={serie.overview}
        createdBy={serie.created_by}
        status={serie.status}
        rating={serie.vote_average}
        tagline={serie.tagline}
        genre={serie.genres}
      />

      <Cast id={serie.id} />
      <CurrentSeason seasons={serie.seasons} name={serie.name} />
      <SimilarContent id={serie.id} />
    </>
  );
};

export default SeriesDetail;
