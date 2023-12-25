export type Query = {
  value: string;
  isValid: boolean;
};

export type QueryData = {
  endpoint: string;
  query: Query;
  variables: string;
  headers: string;
};
