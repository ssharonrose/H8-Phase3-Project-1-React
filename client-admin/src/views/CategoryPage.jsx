import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
// import { createLogger } from "vite";
import TableHead from "../components/TableHead";
import TableItemsText from "../components/TableItemsText";
import { categoriesFetch, categoryDetailFetch, deleteCategory } from "../stores/actions/actionCreator";


const CategoryPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(categoriesFetch())
        // bikin reducer buat category
        // lalu dipanggil dispatch
    }, [])

    const { categories } = useSelector((state) => (state?.categories))
    const { isLoading } = useSelector((state) => (state?.categories))

    function formatDate(dateString) {
        return dateString.slice(0, 10);
    }

    const buttonDeleteCategory = (id) => {
        dispatch(deleteCategory(id))
    };

    const buttonEditCategory = (id) => {
        dispatch(categoryDetailFetch(id))
        navigate(`/edit-category/${id}`);
    };



    console.log(categories, "ini dari category page")

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <div className="flex justify-center flex-col" style={{ width: "80%" }}>
                <div className="flex justify-between mb-5">
                    <h1 className="text-2xl font-bold">CATEGORIES LIST</h1>
                    <NavLink to={"/add-category"}>
                        <button className="text-white bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-300 dark:hover:bg-yellow-300 focus:outline-none dark:focus:ring-yellow-300 ">Add Category</button>
                    </NavLink>
                </div>
                <div className="shadow-md sm:rounded-lg">
                    {isLoading && <Loading />}
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ tableLayout: 'fixed', width: '100%' }}>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <TableHead title={"Category Name"} />
                                <TableHead title={"Created At"} />
                                <TableHead title={"Updated At"} />
                                <TableHead />
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((category) => (
                                <tr key={category?.id}>
                                    <TableItemsText text={category?.name} />
                                    <TableItemsText text={formatDate(category?.createdAt)} />
                                    <TableItemsText text={formatDate(category?.updatedAt)} />
                                    <td className="flex" style={{ marginTop: "10px" }}>
                                        <button onClick={() => buttonEditCategory(category?.id)} className="text-blue-700 focus:ring-4 focus:ring-blue-300 text-xs px-4 py-2 mr-2 mb-2 dark:text-blue-600 dark:focus:ring-blue-800">EDIT</button>
                                        <button onClick={() => buttonDeleteCategory(category?.id)} className="text-red-700 focus:ring-4 focus:ring-red-300 text-xs px-4 py-2 mr-2 mb-2 dark:text-red-600 dark:focus:ring-red-800">DELETE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};

export default CategoryPage;
