import { put,takeEvery } from "redux-saga/effects"; 
import { AuthTypes } from "../actions/action";




function* addDetails({ payload, callback }) {
    console.log("hi saga" ,payload );
    yield put({ });
    try {
      yield put({ type: AuthTypes.BASIC_REQUEST, detail: payload });
      callback(false);
    } catch (e) {
  
    }
  }
  

export default function* AuthSaga() {
 
    yield takeEvery(AuthTypes.BASIC_RESPONSE,addDetails );
   

}

