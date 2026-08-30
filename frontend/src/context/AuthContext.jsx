import { createContext, useState, useEffect } from "react";
import API from "../api";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const loadUser = async () => {

            const token = localStorage.getItem("token");

            console.log("AUTH CHECK - token:", token ? "FOUND" : "NOT FOUND");

            if (!token) {
                console.log("AUTH CHECK - No token");
                setLoading(false);
                return;
            }

            try {

                console.log("AUTH CHECK - Calling /auth/me");

                const response = await API.get(
                    "/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                console.log("AUTH CHECK - Response:", response.data);

                setUser(response.data);

            } catch (error) {

                console.log(
                    "AUTH CHECK - ERROR:",
                    error.response?.status,
                    error.response?.data || error.message
                );

                localStorage.removeItem("token");
                setUser(null);

            } finally {

                setLoading(false);

            }
        }}, []);


    // Login function
    const login = async (email, password) => {

        const response = await API.post(
            "/auth/login",
            {
                email,
                password
            }
        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        setUser(response.data.user);

        return response.data;
    };


    // Register function
    const register = async (name, email, password) => {

        const response = await API.post(
            "/auth/register",
            {
                name,
                email,
                password
            }
        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        setUser(response.data.user);

        return response.data;
    };


    // Logout
    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

    };


    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );
};