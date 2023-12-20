export type TQuery = {
  value: string;
  isValid: boolean;
};

export type TQueryData = {
  endpoint: string;
  query: TQuery;
  variables: string;
  headers: string;
};
