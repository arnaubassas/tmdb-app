import "./footer.scss";
import copywrite from "../../img/copyright-xxl.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">TMDB APP</div>
      <div className="footer__copywrite">
        <img src={copywrite} alt="copywritelogo" width="20px" height="20pxs" />
        <div>All rights reserved by the author</div>
      </div>
    </div>
  );
};
export default Footer;
