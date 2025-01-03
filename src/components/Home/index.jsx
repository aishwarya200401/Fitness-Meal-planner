import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
export const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <main>
      <Navbar></Navbar>
    </main>
  );
};
