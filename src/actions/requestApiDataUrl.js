import { REQUEST_API_DATA_URL } from "./action-types";

export const requestApiDataUrl = (url) => (
  { type: REQUEST_API_DATA_URL, payload: url }
)