import {
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_DETAIL_FETCH_SUCCESS,
    PRODUCT_LOADING
} from "../actions/actionType"

const initialState = {
    products: [],
    productDetail: [],
    isLoading: false
}

const productReducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false
            };

        case PRODUCT_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                productDetail: action.payload,
                isLoading: false
            };

        case PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state

    }
}


export default productReducer