import { useEffect, useState } from "react";
import { getSeries } from "../../services";
import { SeriesListRequest } from "../../interfaces";

import "./SeriesList.scss";
import SeriesCard from "../../components/seriesList/card/SeriesCard";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const SeriesList = () => {
  const [series, setSeries] = useState<SeriesListRequest[]>();
  const [error, setError] = useState(true);

  useEffect(() => {
    getSeries()
      .then((data) => {
        setSeries(data);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return <Error />;
  if (!series) return <Loading />;

  return (
    <>
      <div className="lista">
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
