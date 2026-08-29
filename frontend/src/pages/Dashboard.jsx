import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";


const Dashboard = () => {

    const { user } = useContext(AuthContext);


    return (

        <div className="page">

            <h1>
                Welcome, {user?.name}
            </h1>

            <p>
                This is a protected dashboard.
            </p>

            <p>
                Email: {user?.email}
            </p>

        </div>

    );
};


export default Dashboard;