import { combineReducers } from "redux";
import login from "./LoginReducer";
import register from "./RegisterReducer";
import brand from "./BrandReducer";
import product from "./productReducer";
import variant from "./variantsReducer";
import cart from "./cartReducer";
import AllcodeReducer from "./AllcodeReducer"
import errorMessageReducer from "./errorMessageReducer"
import shareReducer from "./shareReducer";


const rootReducer = combineReducers({
  brand,
  login,
  register,
  product,
  variant,
  cart,
  AllcodeReducer,
  errorMessageReducer,
  gShare: shareReducer,
});
export default rootReducer;