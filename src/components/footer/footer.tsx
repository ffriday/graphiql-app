import logo from "../../assets/rs-react-logo.png";
import github from "../../assets/github.png";
import "./Footer.css";

export const Footer = () => {
  const profileLinks = [
    "https://github.com/ffriday",
    "https://github.com/krkate",
    "https://github.com/romankadevich",
  ];
  return (
    <div className="footer">
      <div className="authors">
        {profileLinks.map((link, index) => (
          <a key={index} href={link}>
            <img className="github-logo" src={github} alt="GitHub Logo"></img>
          </a>
        ))}
      </div>
      <p>2023-2024</p>
      <a href="https://rs.school/react/">
        <img className="rss-logo" src={logo} alt="rss-logo" />
      </a>
    </div>
  );
};
