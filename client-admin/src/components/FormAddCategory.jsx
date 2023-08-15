import { useRef } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addCategory, addProduct, categoriesFetch, categoryDetailFetch, editCategory } from "../stores/actions/actionCreator"

const FormAddCategory = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()


    useEffect(() => {
        if (id) {
            dispatch(categoryDetailFetch(id))
        }
    }, [])

    const { name } = useSelector((state) => state?.categories?.categoryDetail);
    // const { categoryDetail } = useSelector((state) => state?.categories);
    // console.log(name)


    const [formAddCategory, setformAddCategory] = useState({
        name: name ?? ""
    })

    const input = {
        name: useRef()
    }

    const categoryFormInput = (event) => {
        console.log(event.target.value)

        setformAddCategory({
            ...formAddCategory,
            [event.target.name]: event.target.value
        })

    }

    const { error } = useSelector((state) => state?.categories);
    console.log(error)

    const addCategorySubmit = (event) => {
        event.preventDefault()
        dispatch(addCategory(formAddCategory))
            .then(() => {
                navigate(-1);
            })
            .catch((error) => {
                // Handle any errors that occurred during the dispatch
                console.log(error, "dariiii form page");
            });
    };

    const EditCategorySubmit = (e, id) => {
        e.preventDefault()
        const editInput = {
            name: input.name.current.value
        }
        dispatch(editCategory(editInput, id))
            .then(() => {
                navigate("/categories");
            })
            .catch((error) => {
                // Handle any errors that occurred during the dispatch
                console.log(error, "dariiii form page");
            });
    };

    return (
        <div className="flex mt-2 justify-center flex-col" style={{ width: "700px" }}>
            <div className="flex justify-between mb-5">
                <div className="p-6 w-full max-w-l shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {name ? "Edit Category" : "Add Category"}</h1>
                    {error && <div className="text-red-500">{error}</div>}

                    <form onSubmit={(e) => name ? EditCategorySubmit(e, id) : addCategorySubmit(e)} className="space-y-4" action="#">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={name}
                                ref={input.name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="Enter the name"
                                onChange={categoryFormInput}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            {name ? "Edit Category" : "Add Category"}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormAddCategory