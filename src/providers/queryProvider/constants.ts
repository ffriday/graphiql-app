//unformatted query for prettyfy testing
export const INITIAL_QUERY = `
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

export const INITIAL_ENDPOINT =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";
