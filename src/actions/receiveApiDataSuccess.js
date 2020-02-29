import { RECEIVE_API_DATA_SUCCESS } from './action-types';

export const receiveApiDataSuccess = (data) => (
  {type: RECEIVE_API_DATA_SUCCESS, payload: data}
);