import {configureStore} from "redux";
import reducers from "./redux/reducers/index"


const store = configureStore(reducers,{});

export default store;