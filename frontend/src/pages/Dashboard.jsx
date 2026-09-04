import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div className="dashboard-page">

            {/* Hero Section */}
            <section className="dashboard-hero">

                <div>
                    <span className="dashboard-badge">
                        ● AUTHENTICATED
                    </span>

                    <h1>
                        Welcome back,
                        <span> {user?.name || "User"}!</span>
                    </h1>

                    <p>
                        Your account is secure and you're successfully
                        authenticated.
                    </p>
                </div>

                <button
                    className="logout-button"
                    onClick={logout}
                >
                    Logout
                </button>

            </section>


            {/* Statistics */}
            <section className="dashboard-grid">

                <div className="dashboard-card">
                    <div className="card-icon">✓</div>

                    <div>
                        <p className="card-label">
                            Account Status
                        </p>

                        <h3>Active</h3>
                    </div>
                </div>


                <div className="dashboard-card">
                    <div className="card-icon">🔐</div>

                    <div>
                        <p className="card-label">
                            Authentication
                        </p>

                        <h3>JWT Secured</h3>
                    </div>
                </div>


                <div className="dashboard-card">
                    <div className="card-icon">🛡</div>

                    <div>
                        <p className="card-label">
                            Password
                        </p>

                        <h3>Bcrypt Protected</h3>
                    </div>
                </div>

            </section>


            {/* Main Content */}
            <section className="dashboard-content">

                {/* Profile */}
                <div className="profile-card">

                    <div className="section-heading">
                        <h2>Profile</h2>

                        <span className="verified">
                            ✓ Verified
                        </span>
                    </div>

                    <div className="profile-avatar">
                        {(user?.name || "U")
                            .charAt(0)
                            .toUpperCase()}
                    </div>

                    <h3>
                        {user?.name || "User"}
                    </h3>

                    <p className="profile-email">
                        {user?.email || "No email available"}
                    </p>

                </div>


                {/* Security */}
                <div className="security-card">

                    <div className="section-heading">
                        <h2>Security Overview</h2>
                    </div>

                    <div className="security-item">

                        <div className="security-icon">
                            🔑
                        </div>

                        <div>
                            <h4>Password Security</h4>
                            <p>
                                Your password is securely hashed
                                using Bcrypt.
                            </p>
                        </div>

                        <span className="status">
                            Secure
                        </span>

                    </div>


                    <div className="security-item">

                        <div className="security-icon">
                            🎫
                        </div>

                        <div>
                            <h4>JWT Authentication</h4>
                            <p>
                                Your session is protected using
                                JSON Web Tokens.
                            </p>
                        </div>

                        <span className="status">
                            Active
                        </span>

                    </div>


                    <div className="security-item">

                        <div className="security-icon">
                            ☁
                        </div>

                        <div>
                            <h4>Database</h4>
                            <p>
                                Your account data is stored in
                                MongoDB Atlas.
                            </p>
                        </div>

                        <span className="status">
                            Connected
                        </span>

                    </div>

                </div>

            </section>


            {/* Footer */}
            <div className="dashboard-footer">

                <p>
                    Production-Grade Authentication System
                </p>

                <span>
                    React • Node.js • Express • MongoDB • JWT • Bcrypt
                </span>

            </div>

        </div>
    );
};

export default Dashboard;