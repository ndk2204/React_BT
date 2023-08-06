import { createStore, combineReducers } from "redux";
import { DatVeReducer } from "./dat-ve/datve.reducer";
import { QuanLySinhVienReducer } from "./formSV/formSV.reducer";


const rootReducer = combineReducers({
  DatVeReducer,
  QuanLySinhVienReducer,

});

export const store = createStore(
    rootReducer,
    // extension cho redux.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
