import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/index";
import rootSaga from "../sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
    // offline(offlineConfig)
);
sagaMiddleware.run(rootSaga);

export default store;
