import { useEffect, useState } from "react";
import { getSearch, getSeries, SeriesType } from "../../services";
import { SeriesListRequest } from "../../interfaces";

import "./SeriesList.scss";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import { dateModify } from "../../utils";
import Image from "../../components/img/Image";
import { imageUrl } from "../../const";
import SearchBar from "../../components/searchBar/SearchBar";

const SeriesList = () => {
  const [series, setSeries] = useState<SeriesListRequest[]>();
  const [error, setError] = useState(false);
  const [page, setPage] = useState("1");
  const [search, setSearch] = useState<string>("");
  const [searchActive, setSearchActive] = useState(false);

  const { list } = useParams<{ list: SeriesType }>();

  useEffect(() => {
    if (searchActive) {
      getSearch(search)
        .then((data) => {
          setSeries(data);
        })
        .catch(() => setError(true));
    }
    if (list) {
      getSeries(list, page)
        .then((data) => {
          if (page === "1") {
            setSeries(data);
          } else {
            setSeries((prevSeries) => [...(prevSeries || []), ...(data || [])]);
          }
        })
        .catch(() => setError(true));
    }
  }, [list, page, search, searchActive]);

  if (error) return <Error />;
  if (!series) return <Loading />;

  return (
    <div className="seriesListPage">
      <div className="seriesListPage__searchBar">
        <SearchBar
          search={search}
          setSearch={setSearch}
          setSearchActive={setSearchActive}
        />
      </div>
      <div className="seriesListPage__seriesList">
        {series.map((serie) => (
          <Card key={serie.id} size="small">
            <Link
              to={`/serie/${serie.id}`}
              className="seriesListPage__seriesList__link"
            >
              <Image
                src={`${imageUrl}${serie.poster_path}`}
                alt="poster"
                size="small"
              />

              <div className="seriesListPage__seriesList__link__informationSerie">
                <div className="seriesListPage__seriesList__link__informationSerie__title">
                  {serie.name}
                </div>
                <div className="seriesListPage__seriesList__link__informationSerie__date">
                  {dateModify(serie.first_air_date)}
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
      {!search && (
        <div className="seriesListPage__buttonContent">
          <button
            className="seriesListPage__buttonContent__button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Más Resultados
          </button>
        </div>
      )}
    </div>
  );
};

export default SeriesList;
