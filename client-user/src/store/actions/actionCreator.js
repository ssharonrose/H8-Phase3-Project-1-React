// const baseUrl = "http://localhost:8000"
const baseUrl = "https://this-is-september.sharonrose.dev"

import {
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_DETAIL_FETCH_SUCCESS,
    PRODUCT_LOADING
} from "./actionType"



export const productsLoading = () => (
    // ini plain function yang mereturn suatu object,
    //  jadi gausah pake tulisan return, lgsg object aja
    {
        type: PRODUCT_LOADING,
    }
)

export const productsFetchSuccess = (products) => (
    // ini plain function yang mereturn suatu object,
    //  jadi gausah pake tulisan return, lgsg object aja
    {
        type: PRODUCT_FETCH_SUCCESS,
        payload: products

    }
)

export const productsFetch = () => {
    return async (dispatch) => {
        dispatch(productsLoading())
        try {

            const response = await fetch(`${baseUrl}/user/products`)
            const responseJson = await response.json()
            console.log(responseJson, "ini response JSON");

            dispatch(productsFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}

export const productDetailFetchSuccess = (payload) => (
    // ini plain function yang mereturn suatu object,
    //  jadi gausah pake tulisan return, lgsg object aja
    {
        type: PRODUCT_DETAIL_FETCH_SUCCESS,
        payload

    }
)

export const productDetailFetch = (id) => {
    return async (dispatch) => {
        dispatch(productsLoading())
        try {

            console.log("masuk product detail");

            const response = await fetch(`${baseUrl}/user/products/${id}`)
            const responseJson = await response.json()
            console.log(responseJson, "ini response JSON");

            dispatch(productDetailFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}
