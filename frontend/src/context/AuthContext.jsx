import { createContext, useState, useEffect } from "react";
import API from "../api";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const loadUser = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const response = await API.get(
                    "/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setUser(response.data);

            } catch (error) {

                localStorage.removeItem("token");

                setUser(null);

            } finally {

                setLoading(false);

            }
        };


        loadUser();

    }, []);


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