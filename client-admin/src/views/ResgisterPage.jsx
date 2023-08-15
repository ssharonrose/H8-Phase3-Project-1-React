import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../stores/actions/actionCreator";

const RegisterPage = () => {

    const [formRegister, setformRegister] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    })

    const input = {
        username: useRef(),
        email: useRef(),
        password: useRef(),
        phoneNumber: useRef(),
        address: useRef()
    }

    const registerInput = (event) => {
        console.log(event.target.value)

        setformRegister({
            ...formRegister,
            [event.target.name]: event.target.value
        })

    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerSubmit = (event) => {
        event.preventDefault()

        const registInput = {
            username: input.username.current.value,
            email: input.email.current.value,
            password: input.password.current.value,
            phoneNumber: input.phoneNumber.current.value,
            address: input.address.current.value
        }

        dispatch(register(registInput)).then(() => {
            navigate("/")
        })
    }

    return (
        <div className="flex mt-2 justify-center flex-col" style={{ width: "848px" }}>
            <div className="flex justify-between mb-5">
                <div className="p-6 w-full max-w-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Add Admin</h1>
                    <form onSubmit={registerSubmit} className="space-y-4" action="#">
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-900 dark:text-white">
                                Your Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity- placeholder-gray-500"
                                placeholder="optional"
                                onChange={registerInput}
                                ref={input.username}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                ref={input.email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder=""
                                required
                                onChange={registerInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                ref={input.password}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                required
                                onChange={registerInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-900 dark:text-white">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                ref={input.phoneNumber}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="optional"
                                onChange={registerInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="text-sm font-medium text-gray-900 dark:text-white">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                ref={input.address}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-opacity-50 placeholder-gray-500"
                                placeholder="optional"
                                onChange={registerInput}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Register an Admin
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default RegisterPage;
