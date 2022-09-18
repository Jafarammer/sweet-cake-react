import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
  key: "sweetCake",
  // blacklist: ["recipe"],
  whitelist: ["auth"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...[thunk]));
const persistor = persistStore(store);

export { store, persistor };
