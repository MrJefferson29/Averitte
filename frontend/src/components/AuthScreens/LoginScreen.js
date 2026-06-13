import { useState, useContext } from "react";
import axios from "axios";
import "../../Css/Login.css"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setActiveUser, setConfig } = useContext(AuthContext);

  const loginHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const { data } = await axios.post(
        "https://sparko-tracking.onrender.com/auth/login",
        { email, password }
      );

      localStorage.setItem("authToken", data.token);

      const newConfig = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      };

      setConfig(newConfig);

      try {
        const { data: privateData } = await axios.get(
          "https://sparko-tracking.onrender.com/auth/private",
          newConfig
        );
        setActiveUser(privateData.user);
      } catch (profileError) {
        console.error("Failed to load user profile after login:", profileError);
      }

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (err) {
      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        (err.request && !err.response
          ? "Unable to reach the server. Check your connection and try again."
          : err.message) ||
        "Login failed. Please try again.";

      setError(message);
      setTimeout(() => {
        setError("");
      }, 4500);
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <div className="Inclusive-login-page">

      <div className="login-big-wrapper">

        <div className="section-wrapper">

          <div className="top-suggest_register">

            <span>Don't have an account? </span>
            <a href="/register">Sign Up</a>

          </div>

          <div className="top-login-explain">
            <h2>Login to Your Account </h2>

            <p>
              Please Login Your Account, Thank You!
            </p>


          </div>


          <form onSubmit={loginHandler} >
            {error && <div className="error_message">{error}</div>}
            <div className="input-wrapper">
              <input
                type="email"
                required
                id="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1}
              />
              <label htmlFor="email">E-mail</label>

            </div>
            <div className="input-wrapper">

              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              <label htmlFor="password">
                Password

              </label>
            </div>
            <Link to="/forgotpassword" className="login-screen__forgotpassword"> Forgot Password ?
            </Link>
            <button type="submit" disabled={submitting}>
              {submitting ? "Logging in..." : "Login"}
            </button>

          </form>


        </div>

      </div>


    </div>


  );
};

export default LoginScreen;