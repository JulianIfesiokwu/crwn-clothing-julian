import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartRedeucer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartRedeucer
});