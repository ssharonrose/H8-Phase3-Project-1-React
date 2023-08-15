import "flowbite/dist/flowbite.css";
import Card from "../components/Card";
import MyCarousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsFetch } from "../store/actions/actionCreator";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
// import { createLogger } from "vite";

const HomePage = () => {

    const { products } = useSelector((state) => state?.products)
    const { isLoading } = useSelector((state) => state?.products)
    console.log(products, "ini dataaaaaaaa")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsFetch())
    }, [])

    return (
        <>
            <section className="w-[82vw] h-[50vh] flex-col mx-auto">
                {isLoading && <Loading />}
                <MyCarousel />
                <div>
                    <p style={{ marginTop: 550 }}>NEW ARRIVAL</p>
                    <div className="grid  grid-cols-4 gap-4 mt-2">
                        {products?.map((product) => <Card product={product} key={product?.id} />)}
                    </div>
                </div>

                {/* {data?.map((products) => <MyCarousel products={products} key={products?.id} />)} */}
                <Footer />
            </section>
        </>

    )
}


export default HomePage;