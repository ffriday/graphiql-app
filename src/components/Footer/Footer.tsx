import logo from "../../assets/rs-react-logo.png";
import "./Footer.scss";
import { ProfileLinks } from "./constants";
import GitHubLink from "../GitHubLink";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="authors">
        {ProfileLinks.map((link, index) => (
          <GitHubLink key={index} link={link} />
        ))}
      </div>
      <p>2023-2024</p>
      <a href="https://rs.school/react/">
        <img className="rss-logo" src={logo} alt="rss-logo" />
      </a>
    </div>
  );
};
