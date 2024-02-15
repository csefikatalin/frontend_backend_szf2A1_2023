import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";


import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

function App() {
    return (
        <div className="contanier">
          
            <div className="p-5">
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route element={<GuestLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
