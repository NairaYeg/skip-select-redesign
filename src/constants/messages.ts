export const MESSAGES = {
  ERROR_FETCH_FAILED: "Failed to fetch the data",
  ERROR_HTTP: (status: number) => `HTTP error! Status: ${status}`,
} as const;

export const CARD_MESSAGES = {
  SELECT_SKIP: "Select Skip",
  SELECTED: "Selected",
  NOT_AVAILABLE: "Not Available",
} as const;

export const FLAG_MESSAGES = {
  SIZE: (size: number) => `${size} Yard`,
  PRIVATE_PROPERTY_ONLY: "Private Property Only",
  NOT_SUITABLE_FOR_HEAVY_WASTE: "Not Suitable for Heavy Waste",
} as const;
