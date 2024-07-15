import { useEffect, useState } from "react";
import { getSeries } from "../../services";
import { SeriesListRequest } from "../../interfaces";

import "./SeriesList.scss";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import { dateModify } from "../../functions";

const SeriesList = () => {
  const [series, setSeries] = useState<SeriesListRequest[]>();
  const [error, setError] = useState(false);

  const { list } = useParams();

  useEffect(() => {
    if (list) {
      getSeries(list)
        .then((data) => {
          setSeries(data);
        })
        .catch(() => setError(true));
    }
  }, [list]);

  if (error) return <Error />;
  if (!series) return <Loading />;

  return (
    <>
      <div className="seriesList">
        {series.map((serie) => (
          <Card key={serie.id} id={serie.id}>
            <img
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${serie.poster_path}`}
              alt="poster"
            />
            <div className="seriesList__informationSerie">
              <div className="seriesList__informationSerie__title">
                {serie.name}
              </div>
              <div className="seriesList__informationSerie__date">
                {dateModify(serie.first_air_date)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default SeriesList;
