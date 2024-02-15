import { useState } from "react";

import useAuthContext from "../context/AuthContex";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const { login, errors } = useAuthContext();

    const handleRegister = async (e) => {
        e.preventDefault();
        login({
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        });
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
