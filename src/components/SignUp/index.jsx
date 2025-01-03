import { useState } from "react";
import "./signup.css";
import loginImage from "../../assets/loginImage.png";
import { View } from "../View";
import { registerUser } from "../../API/user";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {

  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const register = async (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      setError("Password and confirm password does not match");
      return;
    } else {
      console.log(values);
      try {
        const response = await registerUser(values);
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/login");
      } catch (err) {
        setError(err?.data?.response?.message);
      }
    }
  };

  const handleLogin = () => {
    navigate('/Navbar')
  }
  return (
    <View className={`signup`} as="section">
      <div className="signup-left">
        <img src={loginImage} alt="registration-image" />
      </div>
      <div className="signup-right">
        <h1>FitMeal Partner</h1>
        <h3>Create your account</h3>
        <form
          action=""
          method="post"
          className="signup-form"
          onSubmit={register}
        >
          <input
            type="text"
            placeholder="Username"
            required
            name="username"
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
          />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleLogin}>Sign Up</button>
          {error && <p className="error">{error}</p>}
          <p className="login-now">
            Yes I have an account,<a href="/login"> Login</a>
          </p>
        </form>
      </div>
    </View>
  );
};
