export const prettify = (code: string): string => {
  const value = cleanCode(code);
  const isValid = checkCode(value);
  if (!isValid) {
    return code;
  }
  return formatCode(value);
};

const formatCode = (value: string, tab: string = "  "): string => {
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

export const cleanCode = (code: string): string =>
  code
    .replaceAll(/[ \t]+/g, " ")
    .replaceAll("( ", "(")
    .replaceAll(" )", ")")
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0 && !line.trim().startsWith("#"))
    .map((line) => line.trim())
    .join("\n");

export const checkCode = (code: string): boolean => {
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
