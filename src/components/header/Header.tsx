import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">TMDB APP</div>
      <div className="header__seriesOptions">
        <Link to="airing_today">Airing Today</Link>
        <Link to="on_the_air">On The Air</Link>
        <Link to="popular">Popular</Link>
        <Link to="top_rated">Top Rated</Link>
      </div>
      <div className="header__user">
        <div className="header__user__photo"></div>
      </div>
    </div>
  );
};
export default Header;
