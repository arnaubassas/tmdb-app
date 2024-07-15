import { useEffect, useState } from "react";
import { getSeries } from "../../services";
import { SeriesListRequest } from "../../interfaces";

import "./SeriesList.scss";
import SeriesCard from "../../components/seriesCard/SeriesCard";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { useParams } from "react-router-dom";

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
          <SeriesCard
            key={serie.id}
            id={serie.id}
            name={serie.name}
            src={serie.poster_path}
            date={serie.first_air_date}
          />
        ))}
      </div>
    </>
  );
};

export default SeriesList;
