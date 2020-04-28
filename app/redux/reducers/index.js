import { combineReducers } from "redux";
import LoadingReducer from "@reducers/loadingReducer/LoadingReducer"
import GetDataReducer from "@reducers/data/GetDataReducer";



export default combineReducers({
    isLoading: LoadingReducer,
    getData: GetDataReducer
});
