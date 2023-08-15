import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <section className="flex justify-center flex-row gap-4">
            <div>
                {/* <h1>HALO KIRI</h1> */}
                <Sidebar />
            </div>
            <div className="sm:ml-64">
                <div
                    className="text-xl flex justify-center font-bold my-8 border-b2 pb-2 rounded"
                    style={{ paddingBottom: "40px", paddingLeft: "40px", paddingRight: "40px" }}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default BaseLayout;
