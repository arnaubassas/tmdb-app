import { dateModify } from "../../utils";
import { Season } from "../../interfaces";
import Card from "../card/Card";
import Image from "../img/Image";
import "./currentSeason.scss";
import { imageUrl } from "../../const";

interface CurrentSeasonProps {
  seasons: Season[];
  name: string;
}
const CurrentSeason: React.FC<CurrentSeasonProps> = ({ seasons, name }) => {
  const lastSeason = seasons.slice(-1);

  return (
    <div className="currentSeasonContent">
      <div className="currentSeasonContent__title">Current Season</div>
      <Card key={lastSeason[0].id} size="big">
        <div className="currentSeasonContent__inside">
          <div className="currentSeasonContent__inside__poster">
            <Image
              className="currentSeasonContent__inside__poster__image"
              src={`${imageUrl}${lastSeason[0].poster_path}`}
              alt="poster"
              size="small"
            />
          </div>
          <div className="currentSeasonContent__inside__information">
            <div className="currentSeasonContent__inside__information__numberSeason">
              {lastSeason[0].name}
            </div>
            {lastSeason[0].air_date ? (
              <div className="currentSeasonContent__inside__information__episodes">
                {`${lastSeason[0].air_date.slice(0, 4)} · ${
                  lastSeason[0].episode_count
                } Episodes`}
              </div>
            ) : (
              <div className="currentSeasonContent__inside__information__episodes">
                Soon
              </div>
            )}
            {lastSeason[0] && lastSeason[0].air_date && (
              <div className="currentSeasonContent__inside__information__text">{`Season ${
                lastSeason[0].season_number
              } of ${name} premiered on ${dateModify(
                lastSeason[0].air_date
              )}.`}</div>
            )}
            <div className="currentSeasonContent__inside__information__score">
              User opinion{" "}
              <span className="currentSeasonContent__inside__information__score__span">
                {lastSeason[0].vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CurrentSeason;
