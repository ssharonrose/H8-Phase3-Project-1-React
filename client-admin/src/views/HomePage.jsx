import React from "react";
import TableHead from "../components/TableHead";
import TableItemsImage from "../components/TableItemsImage";
import TableItemsText from "../components/TableItemsText";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, productDetailFetch, productsFetch } from "../stores/actions/actionCreator";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const HomePage = () => {

    const { products, isLoading } = useSelector((state) => state?.products)
    // const { isLoading } = useSelector((state) => state?.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(products, "ini homepage")

    useEffect(() => {
        dispatch(productsFetch())
    }, [])

    const showImage = (id) => {
        navigate(`/images/${id}`);
    };

    const buttonDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    };

    const buttonEditProduct = (id) => {
        dispatch(productDetailFetch(id))
        navigate(`/edit-product/${id}`);
    };

    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <div className="flex justify-center flex-col">
                <div className="flex justify-between mb-5">
                    <h1>PRODUCTS LIST</h1>
                    <NavLink to={"/add-product"}>
                        <button className="text-white bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-300 dark:hover:bg-yellow-300 focus:outline-none dark:focus:ring-yellow-300 ">Add Product</button>
                    </NavLink>
                </div>
                <div className="shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <TableHead title={"No"} />
                                <TableHead title={"Name"} />
                                <TableHead title={"Description"} />
                                <TableHead title={"Category"} />
                                <TableHead title={"Price"} />
                                <TableHead title={"Created By"} />
                                <TableHead title={"Main Image"} />
                                <TableHead title={"Images"} />
                                <TableHead />
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((products, index) =>
                                <tr key={products?.id}>
                                    <TableItemsText text={index + 1} />
                                    <TableItemsText text={products?.name} />
                                    <TableItemsText text={products?.description} />
                                    <TableItemsText text={products?.Category?.name} />
                                    <TableItemsText text={products?.price} />
                                    <TableItemsText text={products?.User?.username} />
                                    <TableItemsImage image={products?.mainImg} />
                                    <td>
                                        <button onClick={() => showImage(products?.id)} className="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-small rounded-lg text-xs px-3 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-600">Show Images</button>
                                    </td>
                                    <td className="flex" style={{ marginTop: "50px" }}>
                                        <button onClick={() => buttonEditProduct(products?.id)} className="text-blue-700 focus:ring-4 focus:ring-blue-300 text-xs px-4 py-2 mr-2 mb-2 dark:text-blue-600 dark:focus:ring-blue-800">EDIT</button>
                                        <button onClick={() => buttonDeleteProduct(products?.id)} className="text-red-700 focus:ring-4 focus:ring-red-300 text-xs px-4 py-2 mr-2 mb-2 dark:text-red-600 dark:focus:ring-red-800">DELETE</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default HomePage;
