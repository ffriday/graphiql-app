export const queryAll = `
fragment FullType on __Type {
  kind
  name
  fields(includeDeprecated: true) {
    name
    args {
      name
      type {
        kind
        name
        ofType {
          kind
          name
        }
      }
      defaultValue
    }
    type {
      kind
      name
      ofType {
        kind
        name
      }
    }
    isDeprecated
    deprecationReason
  }
}

query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    types {
      ...FullType
    }
  }
}
`;

export const queryTypes = `
query IntrospectionQuery {
  __schema {
    types {
      name
    }
  }
}
`;
