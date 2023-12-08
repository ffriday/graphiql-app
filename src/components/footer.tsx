import logo from "../assets/rs-react-logo.png";
import github from "../assets/github.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="authors">
        <a href="https://github.com/ffriday">
          <img className="github-logo" src={github}></img>
        </a>
        <a href="https://github.com/krkate">
          <img className="github-logo" src={github}></img>
        </a>
        <a href="https://github.com/romankadevich">
          <img className="github-logo" src={github}></img>
        </a>
      </div>
      <p>2023-2024</p>
      <a href="https://rs.school/react/">
        <img className="rss-logo" src={logo} alt="rss-logo" />
      </a>
    </div>
  );
};
