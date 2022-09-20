import { axios } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga'

// export const receive = createSagaMiddleware('Details', async()=>{
//   let data = URL("http://192.168.1.49:8091/home")
//   console.log("data",data)
//   return Axios.get("").then((res)=> res.data).catch()
// })
// try {
//   const url = "http://192.168.1.49:8091/home";
//   const res = yield axios.post(url, payload);

//   yield put({ type: "pre",payload  });
//   console.log("result", res.data);

// } catch (e) {
//   callback(e.response.data)

// }





function* prePage({ payload }) {
  console.log(" saga pro");
  yield put({ type: "pre", payload });
  console.log("precomplete", payload)
}
function* proPage({ payload }) {
  console.log(" saga pro");
  yield put({ type: "pro", payload });
  console.log("procomplete", payload)
}
function* testPage({ payload }) {
  console.log("saga test")
  yield put({ type: "test", payload })
  console.log("testcomplete", payload)
}
export default function* AuthSaga() {
  yield takeEvery("prePage", prePage);
  yield takeEvery("proPage", proPage);
  yield takeEvery("proPage", testPage);
}




