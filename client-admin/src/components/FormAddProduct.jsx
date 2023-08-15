import { useRef } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addProduct, categoriesFetch, editProduct, productDetailFetch } from "../stores/actions/actionCreator"

const FormAddProduct = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()


    useEffect(() => {
        if (id) {
            dispatch(productDetailFetch(id)),
                dispatch(categoriesFetch())
        } else {
            dispatch(categoriesFetch())
        }
    }, [])

    const { categories } = useSelector((state) => (state?.categories))
    const { productDetail } = useSelector((state) => (state?.products))
    console.log(productDetail)
    const { name, description, price, mainImg, categoryId } = useSelector((state) => (state?.products?.productDetail))

    console.log(id, name, description, price, mainImg, categoryId)

    const input = {
        name: useRef(),
        description: useRef(),
        price: useRef(),
        mainImg: useRef(),
        categoryId: useRef()
    }



    const [formAddProduct, setformAddProduct] = useState({
        name: name ? name : "",
        description: description ?? "",
        price: price ?? "",
        mainImg: mainImg ?? "",
        categoryId: categoryId ?? 1,
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
    })

    console.log(formAddProduct)

    const productFormInput = (event) => {
        console.log(event.target.value)

        setformAddProduct({
            ...formAddProduct,
            [event.target.name]: event.target.value
        })

    }

    const { error } = useSelector((state) => state?.products);
    console.log(error)

    const addProductSubmit = (event) => {
        event.preventDefault()
        console.log("masuk sini")
        dispatch(addProduct(formAddProduct))
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                // Handle any errors that occurred during the dispatch
                console.log(error, "dariiii form page");
            });
    };

    const editProductSubmit = (e, id) => {
        e.preventDefault()
        const editInput = {
            name: input.name.current.value,
            description: input.description.current.value,
            price: input.price.current.value,
            mainImg: input.mainImg.current.value,
            categoryId: input.categoryId.current.value,
        }
        // dispatch(productDetailFetch(id))
        dispatch(editProduct(editInput, id))
            .then(() => {
                navigate(-1);
            })
            .catch((error) => {
                // dispatch(productDetailFetch(id))
                // Handle any errors that occurred during the dispatch
                console.log(error, "dariiii form page");
            });
    };



    return (
        <div className="flex mt-2 justify-center flex-col" style={{ width: "848px" }}>
            <div className="flex justify-between mb-5">
                <div className="p-6 w-full max-w-l shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{name ? "Edit Product" : "Add Product"}</h1>
                    {error && <div className="text-red-500">{error}</div>}
                    {/* <form onSubmit={addProductSubmit} className="space-y-4" action="#"> */}
                    <form onSubmit={(e) => id ? editProductSubmit(e, id) : addProductSubmit(e)} className="space-y-4" action="#">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="Enter the name"
                                onChange={productFormInput}
                                ref={input.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="text-sm font-medium text-gray-900 dark:text-white">
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                defaultValue={description}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="Enter the description"
                                onChange={productFormInput}
                                ref={input.description}
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="text-sm font-medium text-gray-900 dark:text-white">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                defaultValue={price}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="Enter the price"
                                onChange={productFormInput}
                                ref={input.price}
                            />
                        </div>
                        <div>
                            <label htmlFor="categoryId" className="text-sm font-medium text-gray-900 dark:text-white">
                                Category
                            </label>
                            <select
                                name="categoryId"
                                id="categoryId"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={productFormInput}
                                ref={input.categoryId}>
                                <option disabled>Select a category</option>
                                {categories?.map((category) => (
                                    <option value={category?.id} key={category?.id}>{category?.name}</option>
                                ))}

                            </select>
                        </div>

                        <div>
                            <label htmlFor="mainImg" className="text-sm font-medium text-gray-900 dark:text-white">
                                Main Image
                            </label>
                            <input
                                type="text"
                                name="mainImg"
                                id="mainImg"
                                defaultValue={mainImg}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="Enter the main image URL"
                                onChange={productFormInput}
                                ref={input.mainImg}
                            />
                        </div>
                        {!id &&
                            <div>
                                <div>
                                    <label htmlFor="imgUrl1" className="text-sm font-medium text-gray-900 dark:text-white">
                                        Image Url 1
                                    </label>
                                    <input
                                        type="text"
                                        name="imgUrl1"
                                        id="imgUrl1"
                                        // defaultValue={imgUrl1}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                        placeholder="Enter the additional image URL"
                                        onChange={productFormInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="imgUrl2" className="text-sm font-medium text-gray-900 dark:text-white">
                                        Image Url 2
                                    </label>
                                    <input
                                        type="text"
                                        name="imgUrl2"
                                        id="imgUrl2"
                                        // defaultValue={imgUrl2}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                        placeholder="Enter the additional image URL"
                                        onChange={productFormInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="imgUrl3" className="text-sm font-medium text-gray-900 dark:text-white">
                                        Image Url 3
                                    </label>
                                    <input
                                        type="text"
                                        name="imgUrl3"
                                        id="imgUrl3"
                                        // defaultValue={imgUrl3}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                        placeholder="Enter the additional image URL"
                                        onChange={productFormInput}
                                    />
                                </div>
                            </div>
                        }
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            {id ? "Edit Product" : "Add Product"}
                        </button>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormAddProduct