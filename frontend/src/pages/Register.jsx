import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";


const Register = () => {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { register } = useContext(AuthContext);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            await register(
                name,
                email,
                password
            );

            navigate("/dashboard");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Registration failed"
            );

        }

    };


    return (

        <div className="form-container">

            <h1>Register</h1>


            {error && (
                <p className="error">
                    {error}
                </p>
            )}


            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />


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
                    Register
                </button>

            </form>

        </div>

    );
};


export default Register;