
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <main className="home-page">

            {/* Hero Section */}
            <section className="home-hero">

                <div className="hero-content">

                    <span className="hero-badge">
                        🔐 PRODUCTION-GRADE AUTHENTICATION
                    </span>

                    <h1>
                        Secure authentication,
                        <span> built the right way.</span>
                    </h1>

                    <p>
                        A full-stack authentication system built with
                        React, Node.js, Express.js, MongoDB, JWT and
                        Bcrypt. Secure registration, login, protected
                        routes and token validation — all in one project.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/register"
                            className="primary-button"
                        >
                            Get Started →
                        </Link>

                        <Link
                            to="/login"
                            className="secondary-button"
                        >
                            Sign In
                        </Link>

                    </div>

                </div>


                {/* Security Visual */}
                <div className="hero-visual">

                    <div className="security-circle">
                        🔒
                    </div>

                    <div className="floating-card card-one">
                        <span>✓</span>
                        JWT Verified
                    </div>

                    <div className="floating-card card-two">
                        <span>✓</span>
                        Bcrypt Protected
                    </div>

                    <div className="floating-card card-three">
                        <span>✓</span>
                        MongoDB Connected
                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="features-section">

                <div className="section-intro">

                    <span>FEATURES</span>

                    <h2>
                        Everything you need for secure authentication
                    </h2>

                    <p>
                        Designed around modern authentication practices
                        with security and simplicity in mind.
                    </p>

                </div>


                <div className="features-grid">

                    <div className="feature-card">

                        <div className="feature-icon">
                            🔐
                        </div>

                        <h3>JWT Authentication</h3>

                        <p>
                            Stateless authentication using secure
                            JSON Web Tokens for protected resources.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🛡
                        </div>

                        <h3>Bcrypt Password Security</h3>

                        <p>
                            User passwords are hashed with Bcrypt
                            before being stored in the database.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🚪
                        </div>

                        <h3>Protected Routes</h3>

                        <p>
                            Frontend and backend routes are protected
                            so authenticated users can access secure data.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            ☁
                        </div>

                        <h3>MongoDB Atlas</h3>

                        <p>
                            User data is stored securely using MongoDB
                            Atlas with a scalable cloud database.
                        </p>

                    </div>

                </div>

            </section>


            {/* Authentication Flow */}
            <section className="flow-section">

                <div className="section-intro">

                    <span>HOW IT WORKS</span>

                    <h2>
                        From registration to authentication
                    </h2>

                </div>


                <div className="flow-container">

                    <div className="flow-step">

                        <div className="flow-number">
                            01
                        </div>

                        <h3>Register</h3>

                        <p>
                            Create an account with your name,
                            email and password.
                        </p>

                    </div>


                    <div className="flow-line"></div>


                    <div className="flow-step">

                        <div className="flow-number">
                            02
                        </div>

                        <h3>Secure</h3>

                        <p>
                            Bcrypt hashes your password before it
                            is stored in MongoDB.
                        </p>

                    </div>


                    <div className="flow-line"></div>


                    <div className="flow-step">

                        <div className="flow-number">
                            03
                        </div>

                        <h3>Authenticate</h3>

                        <p>
                            Login generates a JWT used to authenticate
                            protected requests.
                        </p>

                    </div>


                    <div className="flow-line"></div>


                    <div className="flow-step">

                        <div className="flow-number">
                            04
                        </div>

                        <h3>Access</h3>

                        <p>
                            Valid users can access the protected
                            dashboard and resources.
                        </p>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="home-cta">

                <div>

                    <span>
                        READY TO GET STARTED?
                    </span>

                    <h2>
                        Create your secure account today.
                    </h2>

                </div>

                <Link
                    to="/register"
                    className="cta-button"
                >
                    Create Account →
                </Link>

            </section>


            {/* Footer */}
            <footer className="home-footer">

                <p>
                    Production-Grade Authentication System
                </p>

                <p>
                    React • Node.js • Express • MongoDB • JWT • Bcrypt
                </p>

            </footer>

        </main>
    );
};

export default Home;

