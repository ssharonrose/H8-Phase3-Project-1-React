import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logotis from "../assets/logotis.jpg"
import { login } from "../stores/actions/actionCreator";

const LoginPage = () => {

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    })

    const loginInput = (event) => {
        console.log(event.target.value)

        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })

    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginSubmit = (event) => {
        event.preventDefault()
        dispatch(login(formLogin)).then(() => {
            navigate("/")
        })
    }


    return (
        <section className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md">
                <img src={logotis} className="flex justify-center mx-5 " alt="Logo" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admin Sign In</h1>
                    <form onSubmit={loginSubmit} className="space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="@mail.com"
                                required=""
                                onChange={loginInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={loginInput}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
