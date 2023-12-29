import { Query } from "../constants";

export const prettify = (code: string) => {
  const { value, isValid } = parseCode(code);
  if (!isValid) {
    return code;
  }
  return formatCode(value);
};

const formatCode = (value: string, tab: string = "  ") => {
  const code = cleanCode(value);

  const lines = code
    .split(/[{}]+/)
    .map((line) => line.replace("/n", "").trim());

  let indent = 0;
  const indents = code.split("").reduce<[number, string][]>((acc, char) => {
    if (char === "{") acc.push([indent++, "{"]);
    if (char === "}") acc.push([indent--, "}"]);
    return acc;
  }, []);

  const structuredLines = lines.map<[string, number, string]>((line, i) => {
    if (indents[i]) {
      return [line, indents[i][0], indents[i][1]];
    } else {
      return [line, 0, ""];
    }
  });

  const res = structuredLines
    .reduce<string[]>((acc, [text, indent, type]) => {
      const line = text
        .split(/\r?\n/)
        .map((line) => `${tab.repeat(indent)}${line}`)
        .join("\n");
      if (type === "{") acc.push(`${line} {\n`);
      if (type === "}") {
        if (line.trim()) acc.push(`${line}\n`);
        acc.push(`${tab.repeat(indent - 1)}}\n`);
      }
      return acc;
    }, [])
    .join("");

  return res;
};

export const parseCode = (code: string): Query => {
  const value = cleanCode(code);
  const isValid = checkCode(value);
  return { value, isValid };
};

const cleanCode = (code: string) =>
  code
    .replaceAll(/[ \t]+/g, " ")
    .replaceAll("( ", "(")
    .replaceAll(" )", ")")
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0 && !line.trim().startsWith("#"))
    .map((line) => line.trim())
    .join("\n");

const checkCode = (code: string) => {
  const lines = code.split("");
  if (lines.length < 2) {
    return false;
  }
  return (
    lines.reduce((acc, char) => {
      if (char === "{") acc++;
      if (char === "}") acc = acc > 0 ? acc - 1 : -Infinity;
      return acc;
    }, 0) === 0
  );
};
