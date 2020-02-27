import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA } from "./actions/action-types";
import { REQUEST_API_DATA_URL } from "./actions/action-types";
import { receiveApiData } from "./actions/receiveApiData";
import { receiveApiDataUrl } from "./actions/receiveApiDataUrl";
import { fetchData } from "./api";
import { fetchDataUrl } from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}
function* getApiDataUrl(action) {
  try {
    // do api call
    const data = yield call(fetchDataUrl, action.payload);
    yield put(receiveApiDataUrl(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively we may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
  yield takeEvery(REQUEST_API_DATA_URL, getApiDataUrl);
}