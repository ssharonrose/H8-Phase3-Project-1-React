import { CATEGORY_FETCH_SUCCESS, ADD_CATEGORY_ERROR, CATEGORY_LOADING, CATEGORY_DETAIL_FETCH_SUCCESS } from "../actions/actionType"

const initialState = {
    categories: [],
    categoryDetail: [],
    error: [],
    isLoading: false
}

const categoryReducer = (state = initialState, action) => {

    if (action.type === CATEGORY_FETCH_SUCCESS) {
        return {
            ...state,
            categories: action.payload,
            categoryDetail: [],
            error: [],
            isLoading: false
        }
    } else if (action.type === CATEGORY_DETAIL_FETCH_SUCCESS) {
        return {
            ...state,
            categoryDetail: action.payload,
            error: [],
            isLoading: false
        }
    } else if (action.type === ADD_CATEGORY_ERROR) {
        return {
            ...state,
            error: action.error,
            categoryDetail: [],
            isLoading: false
        }
    } else if (action.type === CATEGORY_LOADING) {
        return {
            ...state,
            error: [],
            isLoading: true,
            categoryDetail: [],
        }
    }

    return state
}

export default categoryReducer 