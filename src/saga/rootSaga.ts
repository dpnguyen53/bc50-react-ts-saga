import { fork } from "redux-saga/effects";
import ListProductSaga from "./../duck/saga";

function* rootSaga() {
  yield fork(ListProductSaga);
}

export default rootSaga;
