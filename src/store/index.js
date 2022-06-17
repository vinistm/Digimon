import { createStore, combineReducers, applyMiddleware } from "redux";

import digimonsReducer from "./modules/digimons/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ digimon: digimonsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
