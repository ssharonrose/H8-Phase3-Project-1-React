const DetailImages = ({ productDetail }) => {


    // const { data } = data

    // console.log(data.data, "ini data detail")

    // const images = image

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {productDetail?.Images?.map((el) => <img src={el.imgUrl} key={el?.id} alt="img crashed." className="rounded-lg bg-gray-100 object-cover h-full w-full" />)}
            <img src={productDetail?.mainImg} alt="img crashed." className="rounded-lg bg-gray-100 object-cover h-full w-full" />
        </div>
    )
}

export default DetailImages