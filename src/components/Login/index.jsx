import { useState } from "react";
import "./login.css";
import loginImage from "../../assets/loginImage.png";
import { View } from "../View";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../API/user";
export const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const login = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await loginUser(values);
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    } catch (error) {
      setError(error?.data?.response?.message);
    }
  };
  return (
    <View className={`login`} as="section">
      <div className="login-left">
        <img src={loginImage} alt="registration-image" />
      </div>
      <div className="login-right">
        <h1>FitMeal Partner</h1>
        <h3>Login to your account</h3>
        <form action="" method="post" className="login-form" onSubmit={login}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleInputChange}
          />

          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
          <p className="register-now">
            Don't have an account,<a href="/signup"> Register now</a>
          </p>
        </form>
      </div>
    </View>
  );
};
