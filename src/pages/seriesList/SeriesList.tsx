import { useEffect, useState } from "react";
import { getSeries } from "../../services";
import { SeriesListRequest } from "../../interfaces";

import "./list.scss";
import SeriesCard from "../../components/seriesList/card/SeriesCard";

const SeriesList = () => {
  const [series, setSeries] = useState<SeriesListRequest[]>();
  const typeList = "popular";

  useEffect(() => {
    getSeries(typeList).then((data) => {
      setSeries(data);
    });
  }, []);

  if (!series) return;
  return (
    <>
      <div className="lista">
        {series &&
          series.map((serie) => (
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
