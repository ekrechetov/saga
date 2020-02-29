import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA } from "./actions/action-types";
import { REQUEST_API_DATA_URL } from "./actions/action-types";
import { receiveApiData } from "./actions/receiveApiData";
import { receiveApiDataSuccess } from "./actions/receiveApiDataSuccess";
import { receiveApiDataError } from "./actions/receiveApiDataError";
import { receiveApiDataUrl } from "./actions/receiveApiDataUrl";
import { receiveApiDataUrlSuccess } from "./actions/receiveApiDataUrlSuccess";
import { receiveApiDataUrlError } from "./actions/receiveApiDataUrlError";
import { fetchData } from "./api";
import { fetchDataUrl } from "./api";

// worker Saga: will be fired on REQUEST_API_DATA actions

function* getApiData(action) {
  try {
    yield put(receiveApiData());
    const data = yield call(fetchData);
    yield put(receiveApiDataSuccess(data));
  } catch (e) {
    yield put(receiveApiDataError());
    console.log(e);
  }
}

function* getApiDataUrl(action) {
  try {
    yield put(receiveApiDataUrl());
    const data = yield call(fetchDataUrl, action.payload);
    yield put(receiveApiDataUrlSuccess(data));
  } catch (e) {
    yield put(receiveApiDataUrlError());
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