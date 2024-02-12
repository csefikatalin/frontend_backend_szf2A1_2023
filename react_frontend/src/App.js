import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import Navigation from "./pages/Navigation";

function App() {
    return (
        <div className="contanier">
            <Navigation />
            <div className="p-5">
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
