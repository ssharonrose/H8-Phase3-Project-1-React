import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { createLogger } from "vite";
import DetailImages from "../components/DetailImages";
import Loading from "../components/Loading";
import { productDetailFetch } from "../store/actions/actionCreator";



const DetailPage = () => {

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productDetailFetch(id))
    }, [])

    const { productDetail } = useSelector((state) => state?.products)
    const { isLoading } = useSelector((state) => state?.products)
    console.log(productDetail, "ini productDetail")

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    const features = [
        { name: 'Origin', description: 'Published by ' + productDetail?.User?.username },
        { name: 'Material', description: 'Made primarily from cotton fabric, a natural fiber derived from the cotton plant. Cotton is known for its softness, breathability, and comfort, making it a popular choice for clothing, especially in warm weather' },
    ]




    return (
        <>
            {isLoading && <Loading />}
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"> */}
                    {/* {data?.map((image) => <DetailImages image={image} />)} */}
                    <DetailImages productDetail={productDetail} />
                    {/* </div> */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{productDetail.name}</h2>
                        <p className="mt-4 text-gray-500">
                            {productDetail.description}
                        </p>
                        <p className="mt-4 text-gray-500">
                            {rupiah(productDetail.price)}
                        </p>
                        <p className="mt-4 text-gray-500">
                            Category : {productDetail?.Category?.name}
                        </p>
                        {/* BUTTON */}
                        <div className="flex flex-row">
                            <button type="button" className="w-60 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block align-text-bottom mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                ADD TO CART</button>

                            <button type="button" className="w-60 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block align-text-bottom mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                Chat Admin</button>
                            {/* BUTTON */}
                        </div>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {features.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage;