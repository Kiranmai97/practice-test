import { all } from "redux-saga/effects";
import AuthSaga from "./sagas";

export default function* RootSaga() {
  yield all([AuthSaga()]);
}




