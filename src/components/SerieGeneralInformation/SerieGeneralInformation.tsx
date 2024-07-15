import { CreatedBy, Genre } from "../../interfaces";
import "./SerieGeneralInformation.scss";
interface SeriesGeneralInformationProps {
  name: string;
  date: string;
  poster: string;
  overview: string;
  createdy: CreatedBy[];
  status: string;
  rating: number;
  tagline: string;
  genre: Genre[];
}

const SerieGeneralInformation: React.FC<SeriesGeneralInformationProps> = ({
  name,
  date,
  poster,
  overview,
  createdBy,
  status,
  rating,
  tagline,
  genre,
}) => {
  return (
    <div className="serieGeneralInformation">
      <div className="serieGeneralInformation__poster">
        <img
          className="serieGeneralInformation__poster__image"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`}
          alt="poster"
        />
      </div>
      <div className="serieGeneralInformation__text">
        <div className="serieGeneralInformation__text__name">
          {name}
          <span className="serieGeneralInformation__text__name__spanYear">
            ({date.slice(0, 4)})
          </span>
        </div>
        <div className="serieGeneralInformation__text__genres">
          {genre.map((g) => (
            <div key={g.id}>{g.name}</div>
          ))}
        </div>
        <div className="serieGeneralInformation__text__rating">
          <span className="serieGeneralInformation__text__rating__spanRating">
            {rating.toFixed(1)}
          </span>
          User rating
        </div>
        <div className="serieGeneralInformation__text__status">
          <span className="serieGeneralInformation__text__status__span">
            Status:{" "}
          </span>
          {status}
        </div>
        <div className="serieGeneralInformation__text__about">
          <p className="serieGeneralInformation__text__about__tagline">
            {tagline}
          </p>
          {overview && (
            <>
              <p className="serieGeneralInformation__text__about__title">
                Overview
              </p>
              <p className="serieGeneralInformation__text__about__overview">
                {overview}
              </p>
            </>
          )}
        </div>
        <div className="serieGeneralInformation__text__createrby">
          {createdBy.map((creator: CreatedBy) => (
            <div
              className="serieGeneralInformation__text__createrby__information"
              key={creator.id}
            >
              <p className="serieGeneralInformation__text__createrby__information__name">
                {creator.name}
              </p>
              <p>Creator</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SerieGeneralInformation;
