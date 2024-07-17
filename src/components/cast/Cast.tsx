import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./cast.scss";
import { getCastById } from "../../services";
import { CastRequest } from "../../interfaces";
import Error from "../error/Error";
import Slider from "../slider/Slider";
import Card from "../card/Card";
import Image from "../img/Image";
import { imageUrl } from "../../const";

interface CastProps {
  id: number;
}

const Cast: React.FC<CastProps> = ({ id }) => {
  const [cast, setCast] = useState<CastRequest[]>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getCastById(id)
      .then((data) => {
        setCast(data.slice(0, 15));
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loading />;
  if (error || !cast) return <Error />;

  return (
    <div className="castContent">
      <div className="castContent__title">Series Cast</div>
      <Slider>
        {cast.map((actor) => (
          <Card key={actor.id} size="small">
            <div className="castContent__inside">
              <Image
                src={`${imageUrl}${actor.profile_path}`}
                alt="poster"
                size="small"
              />
              <div className="castContent__inside__informationActor">
                <div className="castContent__inside__informationActor__name">
                  {actor.name}
                </div>
                <div className="castContent__inside__informationActor__realName">
                  {" "}
                  {actor.roles.map((role) => (
                    <div key={role.credit_id}>{role.character}</div>
                  ))}
                </div>
                <div className="castContent__inside__informationActor__episodes">
                  {actor.total_episode_count}
                  Episodes
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Cast;
