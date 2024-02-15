

import React from "react";
import useAuthContext from "../context/AuthContex";
import { Navigate, Outlet } from "react-router-dom";
import NavigationGuest from "../pages/NavigationGuest";
export default function GuestLayout() {
    const { user } = useAuthContext();
    return !user ? <>
    <NavigationGuest/ >
    <Outlet />
    </> : <Navigate to="/login" />;
}
