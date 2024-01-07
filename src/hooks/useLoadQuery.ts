import { useSearchParams } from "react-router-dom";
import {
  INITIAL_ENDPOINT,
  INITIAL_QUERY,
  ParamKeys,
} from "../constants/constants";
import { useEffect } from "react";

export function useLoadQuery(userId: string | null) {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const currentQuery = searchParams.get(ParamKeys.query);
    if (userId && currentQuery === null) {
      const query =
        window.localStorage.getItem(ParamKeys.query) || INITIAL_QUERY;
      const variables =
        searchParams.get(ParamKeys.variables) ||
        window.localStorage.getItem(ParamKeys.variables) ||
        "";
      const headers =
        searchParams.get(ParamKeys.headers) ||
        window.localStorage.getItem(ParamKeys.headers) ||
        "";
      const endpoint =
        searchParams.get(ParamKeys.endpoint) ||
        window.localStorage.getItem(ParamKeys.endpoint) ||
        INITIAL_ENDPOINT;
      setSearchParams({
        [ParamKeys.query]: query,
        [ParamKeys.variables]: variables,
        [ParamKeys.headers]: headers,
        [ParamKeys.endpoint]: endpoint,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
