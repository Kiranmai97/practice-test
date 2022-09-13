import { createStore, applyMiddleware } from 'redux'
import  createSagaMiddleware  from 'redux-saga'
import rootReducer from './reducers/reducer'
import RootSaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);
export default Store;


