import { useEffect, useState } from "react";
import { DetailRequest } from "../../interfaces";
import { getSerieById } from "../../services";
import { useParams } from "react-router-dom";
import SerieGeneralInformation from "../../components/detailSerie/SerieGeneralInformation/SerieGeneralInformation";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";

const DetailSerie = () => {
  const [serie, setSerie] = useState<DetailRequest>();
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSerieById(id)
        .then((data) => {
          setSerie(data);
        })
        .catch(() => setError(true));
    }
  }, [id]);

  if (error) return <Error />;
  if (!serie) return <Loading />;

  return (
    <>
      <div>
        <SerieGeneralInformation
          name={serie.name}
          date={serie.first_air_date}
          poster={serie.poster_path}
          backgroundPoster={serie.backdrop_path}
          overview={serie.overview}
          createrby={serie.created_by}
          status={serie.status}
          punctuation={serie.vote_average}
          tagline={serie.tagline}
          genre={serie.genres}
        />
      </div>
    </>
  );
};

export default DetailSerie;
