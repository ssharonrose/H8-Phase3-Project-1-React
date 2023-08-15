import {
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_DETAIL_FETCH_SUCCESS,
    ADD_PRODUCT_ERROR, PRODUCT_LOADING
} from "../actions/actionType"

const initialState = {
    products: [],
    productDetail: [],
    error: [],
    isLoading: false
}

const productReducer = (state = initialState, action) => {

    if (action.type === PRODUCT_FETCH_SUCCESS) {
        return {
            ...state,
            products: action.payload,
            error: [],
            productDetail: [],
            isLoading: false
        }
    } else if (action.type === PRODUCT_DETAIL_FETCH_SUCCESS) {
        return {
            ...state,
            error: [],
            productDetail: action.payload,
        }
    } else if (action.type === ADD_PRODUCT_ERROR) {
        return {
            ...state,
            error: action.error,
            productDetail: [],
        }
    } else if (action.type === PRODUCT_LOADING) {
        return {
            ...state,
            error: [],
            productDetail: [],
            isLoading: true
        }
    }

    return state


}


export default productReducer