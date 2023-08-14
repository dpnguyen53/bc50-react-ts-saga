import { fork, takeLatest, put, call } from "redux-saga/effects";
import { GET_DATA_PRODUCT } from "./constants";
import {
  actFetchDataRequest,
  actFetchDataSuccess,
  actFetchDataFail,
} from "./action";
import api from "./../utils/apiUtils";
import { Action, Product, Result } from "./types";

function getData() {
  return api.get("Product");
}

function* fetchData(): any {
  try {
    yield put(actFetchDataRequest());
    const result: Result<Product> = yield call(() => api.get("Product"));
    yield put(actFetchDataSuccess(result.data.content));
  } catch (err) {
    yield put(actFetchDataFail(err));
  }
}

function* fetchDataWacher() {
  yield takeLatest(GET_DATA_PRODUCT, fetchData);
}

export default function* () {
  yield fork(fetchDataWacher);
}
