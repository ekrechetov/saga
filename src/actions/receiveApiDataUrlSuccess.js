import { RECEIVE_API_DATA_URL_SUCCESS } from './action-types';

export const receiveApiDataUrlSuccess = (item) => (
  { type: RECEIVE_API_DATA_URL_SUCCESS, payload: item }
);