import { useNavigate } from "react-router-dom";
const Card = ({ product }) => {
    // const product = products.products
    const navigate = useNavigate();

    const detailProduct = () => {
        navigate(`/detail/${product?.id}`);
    };

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        <>
            <div onClick={detailProduct} className="max-w-sm mb-20 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={product?.mainImg} alt="" className="object-cover h-full w-full" />
                <p className="mb-2 mt-2 pl-2 text-xs text-gray-700 dark:text-gray-400">{product?.name}</p>
                <p className="pl-2 mb-2 text-bold text-xs">{rupiah(product?.price)}</p>
            </div>
        </>
    )
}

export default Card