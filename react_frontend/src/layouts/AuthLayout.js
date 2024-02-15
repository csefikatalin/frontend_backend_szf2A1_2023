import React from "react";
import useAuthContext from "../context/AuthContex";
import { Navigate, Outlet } from "react-router-dom";
import NavigationAuth from "../pages/NavigationAuth";
export default function AuthLayout() {
    const { user } = useAuthContext();
    return user ? (
        <>
            <NavigationAuth />
            <Outlet />
        </>
    ) : (
        <Navigate to="/" />
    );
}
