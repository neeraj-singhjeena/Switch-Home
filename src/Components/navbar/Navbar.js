import React, { useState } from "react";
import { signUp, signIn, signOutUser } from "../../authService";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // login or signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (mode) => {
    setAuthMode(mode);
    setShowModal(true);
    setSuccessMessage("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setPhone("");
    setAddress("");
  };
  const closeModal = () => setShowModal(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await signUp(email, password);
      setSuccessMessage("Signup successful ✅ Redirecting to login...");
      setTimeout(() => {
        setAuthMode("login");
        setSuccessMessage("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFullName("");
        setPhone("");
        setAddress("");
      }, 1500);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setSuccessMessage("Login successful ✅ Closing modal...");
      setIsLoggedIn(true);
      setTimeout(() => closeModal(), 1000);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      setIsLoggedIn(false);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">SwitchHome</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Contact Us</li>
          {!isLoggedIn && (
            <>
              <li>
                <button
                  className="login-signup-btn"
                  onClick={() => openModal("login")}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="login-signup-btn"
                  onClick={() => openModal("signup")}
                >
                  Signup
                </button>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button className="login-signup-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>

      {showModal && (
        <>
          <div className="auth-overlay" onClick={closeModal}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
              <span className="auth-close" onClick={closeModal}>
                &times;
              </span>
              <h2>{authMode === "login" ? "Login" : "Signup"}</h2>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              <form
                onSubmit={authMode === "login" ? handleLogin : handleSignup}
              >
                {authMode === "signup" && (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="auth-input"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="auth-input"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="auth-input"
                      required
                    />
                  </>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                  required
                />
                {authMode === "signup" && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="auth-input"
                    required
                  />
                )}
                <button type="submit" className="login-signup-btn">
                  {authMode === "login" ? "Login" : "Signup"}
                </button>
              </form>
              <p className="switch-auth">
                {authMode === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <span onClick={() => setAuthMode("signup")}>Signup</span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span onClick={() => setAuthMode("login")}>Login</span>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
};

export default Navbar;
