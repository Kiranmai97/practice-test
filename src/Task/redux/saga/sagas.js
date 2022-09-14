import { put,takeEvery } from "redux-saga/effects"; 

function* prePage({ payload }) {
    console.log(" saga Pre" );
    yield put({type:"pre",payload });
    console.log("precomplete",payload)
  }
  function* proPage({ payload}){
    console.log(" saga pro");
    yield put({ type:"pro",payload});
    console.log("procomplete", payload)
  }
  function* testPage({ payload}){
    console.log("saga test")
    yield put({ type: "test",payload})
    console.log("testcomplete",payload)
  }
export default function* AuthSaga() {
    yield takeEvery("prePage",prePage );
    yield takeEvery("proPage",proPage );
    yield takeEvery("proPage",testPage );
}




