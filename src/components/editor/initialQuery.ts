import { TQueryData } from "../../providers/queryProvider";

const initialQuery = `
# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.

query test (id: Int) {
  allFilms {
    edges {
      node {
        id

    name
      }
      node {
        id
      }
    }
      }
}

#end
`;

export const initialQueryContext: TQueryData = {
  endpoint: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  query: { value: initialQuery, isValid: true },
  variables: "",
  headers: "",
};
