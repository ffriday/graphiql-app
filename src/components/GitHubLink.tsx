import github from "../assets/github.png";

const GitHubLink = ({ link }: { link: string }) => {
  return (
    <a href={link}>
      <img className="github-logo" src={github} alt="GitHub Logo"></img>
    </a>
  );
};

export default GitHubLink;
