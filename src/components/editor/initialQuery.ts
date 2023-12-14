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

export const initialQueryContext = {
  query: { value: initialQuery, isValid: true },
  variables: "",
  headers: "",
};
