// const baseUrl = "http://localhost:8000"
const baseUrl = "https://this-is-september.sharonrose.dev"

import { json } from "react-router-dom"
import {
    PRODUCT_FETCH_SUCCESS, CATEGORY_FETCH_SUCCESS, PRODUCT_DETAIL_FETCH_SUCCESS, ADD_PRODUCT_ERROR, ADD_CATEGORY_ERROR, PRODUCT_LOADING, CATEGORY_LOADING, CATEGORY_DETAIL_FETCH_SUCCESS
} from "./actionType"


export const login = (data) => {
    return async (dispatch) => {
        try {

            const response = await fetch(`${baseUrl}/admin/login`,
                {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password
                    })
                },

            )
            const responseJson = await response.json()
            console.log(responseJson);

            const { access_token } = responseJson

            console.log(access_token);

            localStorage.setItem("access_token", access_token)
            // console.log(responseJson, "ini response JSON");


        } catch (error) {
            console.log(error);
        }
    }
}

export const register = (data) => {
    return async (dispatch) => {
        try {
            console.log("masuk category add");

            const response = await fetch(`${baseUrl}/admin/register`, {
                method: "POST",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            })
            // dispatch(categoriesFetch())

        } catch (error) {
            console.log(error);
        }
    }
}

export const logout = () => {
    return async () => {
        try {

            localStorage.clear()

        } catch (error) {
            console.log(error);
        }
    }
}

// ------ PRODUCT ------ //

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


            const response = await fetch(`${baseUrl}/admin/products`, {
                headers: {
                    authorization: localStorage.getItem('access_token'),
                }
            }
            )
            const responseJson = await response.json()
            // console.log(responseJson, "ini response JSON");

            dispatch(productsFetchSuccess(responseJson))


        } catch (error) {
            console.log(error);
        }
    }
}

export const productDetailFetchSuccess = (product) => (
    // ini plain function yang mereturn suatu object,
    //  jadi gausah pake tulisan return, lgsg object aja
    {
        type: PRODUCT_DETAIL_FETCH_SUCCESS,
        payload: product

    }
)

export const productDetailFetch = (id) => {
    return async (dispatch) => {
        try {

            console.log("masuk product detail");

            const response = await fetch(`${baseUrl}/admin/products/${id}`, {
                headers: {
                    authorization: localStorage.getItem('access_token'),
                }
            })
            const responseJson = await response.json()
            console.log(responseJson, "ini response JSON <<<<<<<<<<<<,");

            dispatch(productDetailFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}

export const addProductError = (error) => ({
    type: ADD_PRODUCT_ERROR,
    error: error,
});

export const addProduct = (product) => {
    return async (dispatch) => {
        try {
            console.log("masuk product add");
            console.log(product);

            const response = await fetch(`${baseUrl}/admin/products`, {
                method: "POST",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    mainImg: product.mainImg,
                    categoryId: product.categoryId,
                    imgUrl1: product.imgUrl1,
                    imgUrl2: product.imgUrl2,
                    imgUrl3: product.imgUrl3,
                })
            })

            const responseJson = await response.json()
            console.log(responseJson, "ini response jsonn");

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(productsFetch())
            return Promise.resolve();

        } catch (error) {
            console.log(error, "from action creator");
            dispatch(addProductError(error.message))
            return Promise.reject(error);
        }
    }
}

export const editProduct = (product, id) => {
    return async (dispatch) => {
        try {
            console.log("masuk product add");
            console.log(product);

            const response = await fetch(`${baseUrl}/admin/products/${id}`, {
                method: "PUT",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    mainImg: product.mainImg,
                    categoryId: product.categoryId,
                })
            })

            const responseJson = await response.json()

            console.log("kelar edit")
            console.log(responseJson, "ini response");

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(productsFetch())
            return Promise.resolve();

        } catch (error) {
            console.log(error, "dari action creator");
            dispatch(addProductError(error.message))
            return Promise.reject(error);
        }
    }
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            console.log("masuk delete product");
            console.log(id);

            const response = await fetch(`${baseUrl}/admin/products/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                }
            })

            console.log("kelar delete")
            // const responseJson = await response.json()

            dispatch(productsFetch())

        } catch (error) {
            console.log(error);
        }
    }
}

// ------ CATEGORIES ------ //

export const categoriesFetchSuccess = (categories) => ({
    type: CATEGORY_FETCH_SUCCESS,
    payload: categories
})

export const categoriesLoading = () => (
    // ini plain function yang mereturn suatu object,
    //  jadi gausah pake tulisan return, lgsg object aja
    {
        type: CATEGORY_LOADING,
    }
)

export const categoriesFetch = () => {
    return async (dispatch) => {
        dispatch(categoriesLoading())

        try {
            const response = await fetch(baseUrl + "/admin/categories", {
                headers: {
                    authorization: localStorage.getItem('access_token')
                }
            })
            const responseJson = await response.json()

            dispatch(categoriesFetchSuccess(responseJson))


        } catch (error) {
            console.log(error);
        }
    }
}

export const addCategoryError = (error) => ({
    type: ADD_CATEGORY_ERROR,
    error: error,
});

export const addCategory = (category) => {
    return async (dispatch) => {
        try {
            console.log("masuk category add");

            const response = await fetch(`${baseUrl}/admin/categories`, {
                method: "POST",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: category.name,
                })
            })

            const responseJson = await response.json()

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(categoriesFetch())
            return Promise.resolve();


        } catch (error) {
            console.log(error, "dari action creator");
            dispatch(addCategoryError(error.message))
            return Promise.reject(error);
        }
    }
}

export const editCategory = (category, id) => {
    return async (dispatch) => {
        try {
            console.log("masuk edit category");

            const response = await fetch(`${baseUrl}/admin/categories/${id}`, {
                method: "PUT",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: category.name,
                })
            })

            console.log("kelrar editt");

            const responseJson = await response.json()

            console.log(responseJson);

            if (!response.ok) {
                throw new Error(responseJson.message)
            }

            dispatch(categoriesFetch())
            return Promise.resolve();


        } catch (error) {
            console.log(error, "dari action creator");
            dispatch(addCategoryError(error.message))
            return Promise.reject(error);
        }
    }
}

export const categoryDetailFetchSuccess = (category) => (
    // ini plain function yang mereturn suatu object,
    //  jadi gausah pake tulisan return, lgsg object aja
    {
        type: CATEGORY_DETAIL_FETCH_SUCCESS,
        payload: category

    }
)

export const categoryDetailFetch = (id) => {
    return async (dispatch) => {
        try {

            console.log(id);

            console.log("masuk category detail");

            const response = await fetch(`${baseUrl}/admin/categories/${id}`, {
                headers: {
                    authorization: localStorage.getItem('access_token'),
                }
            })
            const responseJson = await response.json()
            console.log(responseJson, "ini response JSON <<<<<<<<<<<<,");

            dispatch(categoryDetailFetchSuccess(responseJson))

        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteCategory = (id) => {
    return async (dispatch) => {
        try {
            console.log("masuk delete product");
            console.log(id);

            const response = await fetch(`${baseUrl}/admin/categories/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: localStorage.getItem('access_token'),
                    "content-type": "application/json"
                }
            })

            console.log("kelar delete category")
            // const responseJson = await response.json()

            dispatch(categoriesFetch())

        } catch (error) {
            console.log(error);
        }
    }
}
