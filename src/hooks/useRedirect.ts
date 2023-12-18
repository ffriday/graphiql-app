import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useRedirect = (route: string, userId: string | null) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate(route);
    }
  }, [navigate, userId, route]);
};
