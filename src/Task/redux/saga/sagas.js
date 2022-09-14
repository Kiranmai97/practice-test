import { put,takeEvery } from "redux-saga/effects"; 
import axios from "axios";


function* prePage({ payload, callback }) {
    console.log(" saga Pre" );
    yield put({type:"pre",payload });
    console.log("precomplete",payload)
    try {
      const url = `http://192.168.1.49:8091/home`;
      const res = yield axios.post(url, payload);
    
      yield put({ type: "pre", data: res.data });
      console.log("result", res.data);
    
    } catch (e) {
      callback(e.response.data)
    
    }
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




