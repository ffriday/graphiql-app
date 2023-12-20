//unformatted query for prettyfy testing
export const initialQuery = `
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

export const initialEndpoint =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";
