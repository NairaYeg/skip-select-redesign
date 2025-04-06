export const MESSAGES = {
  ERROR_FETCH_FAILED: "Failed to fetch the data",
  ERROR_HTTP: (status: number) => `HTTP error! Status: ${status}`,
} as const;
