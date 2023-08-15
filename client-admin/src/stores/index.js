import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer"
import categoryReducer from './reducers/categoryReducer';

const rootReducer = combineReducers({
    //statenya ngumpul sini semua
    products: productReducer,
    categories: categoryReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store