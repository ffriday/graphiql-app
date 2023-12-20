import { TQuery } from "../providers/queryProvider";

export const prettify = (code: string) => {
  const { value, isValid } = parseCode(code);
  const query = isValid ? formatCode(value) : code;
  return query;
};

const formatCode = (code: string, tabulation: number = 2) => {
  const format = (code: string, level: number, result: string[]) => {
    const open = code.indexOf("{");
    const closed = code.indexOf("}");
    if (closed < 0) return;
    const isOpen = open >= 0 && open < closed;
    const position = isOpen ? open : closed;
    let tab = " ".repeat(level * tabulation);
    let line = code.substring(0, position).trim();

    if (isOpen) {
      line = line
        .split(" ")
        .filter((word) => word.length > 0)
        .map((word) => word.trim())
        .join(" ");
      line = line.replaceAll("( ", "(");
      line = line.replaceAll(" )", ")");
    } else {
      if (line.length > 1) {
        line = `${line
          .split("\n")
          .map((line) => line.trim())
          .join(`\n${tab}`)}\n${tab.substring(tabulation)}`;
      } else {
        tab = tab.substring(tabulation);
      }
    }

    result.push(`${tab}${line}${isOpen ? " {" : "}"}`);
    format(code.substring(position + 1), level + (isOpen ? 1 : -1), result);
  };

  const result: string[] = [];
  format(code, 0, result);
  return result.join("\n").trim();
};

export const parseCode = (code: string): TQuery => {
  const value = cleanCode(code);
  const isValid = checkCode(value);
  return { value, isValid };
};

const cleanCode = (code: string) =>
  code
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0 && !line.trim().startsWith("#"))
    .map((line) => line.trim())
    .join("\n");

const checkCode = (code: string) =>
  code.split("").reduce((acc, char) => {
    if (char === "{") acc++;
    if (char === "}") acc = acc > 0 ? acc - 1 : -Infinity;
    return acc;
  }, 0) === 0;
