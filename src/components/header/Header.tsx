import { Link } from "react-router-dom";
import "./header.scss";
import Image from "../img/Image";
import userPhoto from "../../img/avatar.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">TMDB APP</div>
      <div className="header__seriesOptions">
        <Link to="popular">Popular</Link>
      </div>
      <div className="header__seriesOptions">
        <Link to="top_rated">Top Rated</Link>
      </div>
      <div className="header__seriesOptions">
        <Link to="airing_today">Airing Today</Link>
      </div>
      <div className="header__seriesOptions">
        <Link to="on_the_air">On The Air</Link>
      </div>
      <div className="header__user">
        <div className="header__user__photo">
          <Image
            src={userPhoto}
            alt="userphoto"
            size="small"
            className="header__user__photo__user"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
