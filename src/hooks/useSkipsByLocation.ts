import { useState, useEffect } from "react";
import { Skip } from "../types/Skip";
import { MESSAGES } from "../constants/messages";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

export const useSkipsByLocation = (postcode: string, area: string) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`
        );

        if (!response.ok) {
          throw new Error(MESSAGES.ERROR_HTTP(response.status));
        }

        const data: Skip[] = await response.json();
        setSkips(data);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : MESSAGES.ERROR_FETCH_FAILED;
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchData();
  }, [postcode, area]);

  return { skips, loading, error };
};
