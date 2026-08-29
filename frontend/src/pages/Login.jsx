import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";


const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            await login(
                email,
                password
            );

            navigate("/dashboard");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Login failed"
            );

        }

    };


    return (

        <div className="form-container">

            <h1>Login</h1>


            {error && (
                <p className="error">
                    {error}
                </p>
            )}


            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />


                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />


                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );
};


export default Login;