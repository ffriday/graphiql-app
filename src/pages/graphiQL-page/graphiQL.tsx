import { useAppContext } from "../../provisers/LangProvider";
import "./graphiQL.css";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const GraphiQLMessage =
    language === "ru"
      ? "Здесь будет всё самое интересное"
      : "All the most interesting things will be here";
  return (
    <>
      <h1>GraphiQL</h1>
      <p>{GraphiQLMessage}</p>
      <div className="graphiQL-container">
        <aside className="settings"></aside>
        <main className="session">
          <Editor />
          <div className="response"></div>
        </main>
      </div>
    </>
  );
};

const graphiQLText = `
# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.

query test (if: Int) {
  allFilms {
    edges {
      node {
        id
      }
    }
  }
}`;

const prettify = (code: string) => {
  const lines = cleanCode(code).join("");
  const valid = checkCode(lines);
  const res = formatCode(lines);
  return { valid, res };
};

const formatCode = (code: string) => {
  return code;
};

const cleanCode = (code: string) =>
  code
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0 && !line.trim().startsWith("#"));

const checkCode = (code: string) =>
  code.split("").reduce((acc, char) => {
    if (char === "{") acc++;
    if (char === "}") acc = acc > 0 ? acc - 1 : -Infinity;
    return acc;
  }, 0) === 0;

console.log(prettify(graphiQLText));

const Editor = () => {
  return <pre className="editor">{graphiQLText}</pre>;
};
