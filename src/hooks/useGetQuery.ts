import { useSearchParams } from "react-router-dom";
import { ParamKeys } from "../constants";

export function useGetQuery() {
  const [getSearchParams] = useSearchParams();
  return {
    query: getSearchParams.get(ParamKeys.query) ?? "",
    variables: getSearchParams.get(ParamKeys.variables) ?? "",
    headers: getSearchParams.get(ParamKeys.headers) ?? "",
  };
}
