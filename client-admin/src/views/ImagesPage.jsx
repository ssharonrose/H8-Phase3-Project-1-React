import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { createLogger } from "vite";
import TableHead from "../components/TableHead";
import TableItemsImage from "../components/TableItemsImage";
import { productDetailFetch } from "../stores/actions/actionCreator";

const ImagesPage = () => {

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()

    const { productDetail } = useSelector((state) => state?.products)

    useEffect(() => {
        dispatch(productDetailFetch(id))
    }, [])


    console.log(productDetail, "product detail")

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    const navigate = useNavigate()

    const buttonBackHandler = () => {
        navigate("/")
    }

    return (
        <div className="flex justify-center flex-col" style={{ width: "90%" }}>
            <div className="flex justify-between mb-5"></div>
            <div className="grid grid-cols-3 gap-2">
                <div className="grid grid-rows-3 gap-2">
                    {productDetail?.Images?.map((image) =>
                        <img className="object-cover h-48 w-96 rounded-lg" key={image?.id} src={image?.imgUrl} alt="" />
                    )}
                </div>
                <div>
                    <img className="object-cover h-full w-full rounded-lg" src={productDetail?.mainImg} alt="" />
                </div>
                <div className="flex items-start">
                    <button
                        onClick={buttonBackHandler}
                        className="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-blue-600 font-small rounded-lg text-xs px-3 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-600"
                    >
                        Back To Product
                    </button>
                </div>
            </div>
        </div >
    );
};

export default ImagesPage;
