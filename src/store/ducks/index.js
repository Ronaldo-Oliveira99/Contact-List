// import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../reducers/reducer";

const rootPersistConfig = {
  key: "root",
  storage: storage
};

// const rootReducer = combineReducers({
//   myReducer: reducer
// });

export default persistReducer(rootPersistConfig, reducer);
