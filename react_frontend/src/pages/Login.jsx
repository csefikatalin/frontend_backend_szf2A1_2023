import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = ()=>axios.get("/sanctum/csrf-cookie")


    const handleLogin = async (e) => {
        e.preventDefault();
        await csrf()
        try {
            await axios.post("/login", { email: email, password: password });
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
                console.log(errors)
            }
            if (e.response.status === 419) {
               
                console.log(errors)
            }
        }
    };
    return (
        <div className=" m-auto" style={{ maxWidth: "400px" }}>
            <h1 className="text-center">Bejelentkezés</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="form-control"
                        id="email"
                        placeholder="email"
                        name="email"
                    />
                    <div>
                        {errors.email && (
                            <span className="text-danger">
                                {errors.email[0]}
                            </span>
                        )}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Jelszó:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="form-control"
                        id="pwd"
                        placeholder="jelszó"
                        name="pwd"
                    />
                    <div>
                    {errors.password && (
                        <span className="text-danger">
                            {errors.password[0]}
                        </span>
                    )}
                    </div>
                </div>

                <div className=" text-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                    <p>
                        <Link
                            className="nav-link text-info"
                            to="/forgot-password"
                        >
                            Elfelejtett jelszó
                        </Link>
                    </p>
                    <p>
                        Még nincs felhaszálóneve?
                        <Link className="nav-link text-info" to="/register">
                            Regisztráció
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
