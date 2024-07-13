import { useEffect, useState } from "react";
import { getSeries } from "../../services";
import { SeriesListRequest } from "../../interfaces";

import "./SeriesList.scss";
import SeriesCard from "../../components/seriesList/card/SeriesCard";
import Loading from "../../components/loading/Loading";

const SeriesList = () => {
  const [series, setSeries] = useState<SeriesListRequest[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    getSeries()
      .then((data) => {
        setSeries(data);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return <div>Something went wrong</div>;
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
