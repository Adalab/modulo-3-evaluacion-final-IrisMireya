import "../styles/layout/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer className="footer_icon">
        <a
          className="footer__text"
          href="https://www.youtube.com/watch?v=KlLMlJ2tDkg"
        >
          Wow <FontAwesomeIcon icon={ faCirclePlay } />
        </a>
      </footer>
    </div>
  );
};
export default Footer;
