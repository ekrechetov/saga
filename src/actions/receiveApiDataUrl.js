import { RECEIVE_API_DATA_URL } from './action-types';

export const receiveApiDataUrl = (item) => (
  { type: RECEIVE_API_DATA_URL, payload: item }
);