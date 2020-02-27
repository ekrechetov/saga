import { RECEIVE_API_DATA } from './action-types';

export const receiveApiData = (data) => (
  { type: RECEIVE_API_DATA, payload: data }
);