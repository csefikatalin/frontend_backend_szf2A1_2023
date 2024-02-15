import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const csrf = () => axios.get("/sanctum/csrf-cookie");
    const handleRegister = async (e) => {
        e.preventDefault();
        await csrf();
        try {
            await axios.post("/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            });
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirmation("");
            navigate("/");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
                
            }
            if (e.response.status === 419) {
               
                console.log(errors)
            }
        }
    };

    return (
        <div className=" m-auto" style={{ maxWidth: "400px" }}>
            <h1 className="text-center">Regisztráció</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">
                        Név:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        className="form-control"
                        id="name"
                        placeholder="Név"
                        name="name"
                    />
                    <div>
                        {errors.name && (
                            <span className="text-danger">
                                {errors.name[0]}
                            </span>
                        )}
                    </div>
                </div>
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
                <div className="mb-3">
                    <label htmlFor="pwd2" className="form-label">
                        Jelszó újra:
                    </label>
                    <input
                        type="password"
                        value={password_confirmation}
                        onChange={(e) => {
                            setPasswordConfirmation(e.target.value);
                        }}
                        className="form-control"
                        id="pwd2"
                        placeholder="jelszó újra"
                        name="pwd2"
                    />
                    <div>
                        {errors.password_confirmation && (
                            <span className="text-danger">
                                {errors.password_confirmation[0]}
                            </span>
                        )}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Regisztrálok
                </button>
            </form>
        </div>
    );
}
