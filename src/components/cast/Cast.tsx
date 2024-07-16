import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./cast.scss";
import { getCastById } from "../../services";
import { CastRequest } from "../../interfaces";
import Error from "../error/Error";
import Slider from "../slider/Slider";
import Card from "../card/Card";

interface CastProps {
  id: number;
}

const Cast: React.FC<CastProps> = ({ id }) => {
  const [cast, setCast] = useState<CastRequest[]>();
  const [principalCast, setPrincipalCast] = useState<CastRequest[]>();
  const [error, setError] = useState(false);

  // const {response, error, isLoading} = useFetch(
  //   () => getCastById(id),
  //   [id]
  // )

  useEffect(() => {
    getCastById(id)
      .then((data) => {
        setPrincipalCast(data.slice(0, 15));
        setCast(data);
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) return <Error />;
  if (!principalCast) return <Loading />;
  return (
    <div className="castContent">
      <div className="castContent__title">Series Cast</div>
      <Slider>
        {principalCast.map((actor) => (
          <Card key={actor.id} size="small">
            <div className="castContent__inside">
              <img
                src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${actor.profile_path}`}
                alt="poster"
              />
              <div className="castContent__inside__informationActor">
                <div className="castContent__inside__informationActor__name">
                  {actor.name}
                </div>
                <div className="castContent__inside__informationActor__realName">
                  {" "}
                  {actor.roles.map((role) => (
                    <div>{role.character}</div>
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
