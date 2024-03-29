export const APP_ROUTES = {
  WELCOME: "/",
  SIGNIN: "sign_in",
  SIGNUP: "sign_up",
  GRAPHIQL: "graphiQL",
};

export enum ParamKeys {
  query = "query",
  variables = "variables",
  headers = "headers",
  language = "lang",
  endpoint = "endpoint",
}

//unformatted query for prettyfy testing
export const INITIAL_QUERY = `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
query test {
  allStarships {
    starships {
  id
  name
    } } }
`;

export const INITIAL_ENDPOINT =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";

export enum LANGUAGES {
  EN = "EN",
  RU = "RU",
}

export enum LangPages {
  welcome = "welcome-page",
  header = "header",
  signing = "signIn-page",
  sighup = "signUp-page",
  graphql = "graphQL-page",
  shared = "shared",
  toolbar = "toolbar",
  schema = "schema",
}
