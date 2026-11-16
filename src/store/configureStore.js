import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localforage from "localforage";
import rootReducer from "./reducer";

const storage = localforage.createInstance({
  name: "sweetCake",
  storeName: "redux_storage",
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);

export const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);
