import { createStore, applyMiddleware } from "redux";
//import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "../reducers";

// ,createLogger()
const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer,middleware);

export default store;