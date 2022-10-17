import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/registration/Login/Login";
import SignUp from "../../pages/registration/SignUp/SignUp";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Game from "../../pages/Game/Game";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  const getUser = async () => {
    const resp = await fetch("http://localhost:9292/me");
    const data = await resp.json();
    console.log(data);
  };

  const onLoginSubmit = async (credentials) => {
    console.log("logging in");
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    };
    const resp = await fetch("http://localhost:9292/login", config);
    const data = await resp.json();
    if(resp.ok){
      setUser({...data})
      navigate("/game")
    } else {
      console.log("errors", data.errors)
    }
  };

  const onSignUpSubmit = async (userData) => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    const resp = await fetch("http://localhost:9292/signup", config);
    const data = await resp.json();
    if(resp.ok){
      setUser({...data})
      navigate("/game")
    } else {
      console.log("errors", data.errors)
    }
  };

  useEffect(() => {
    getUser();
  },[]);

  return (
    <div className="App">
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLoginSubmit={onLoginSubmit} />}
        />
        <Route
          path="/signup"
          element={<SignUp onSignUpSubmit={onSignUpSubmit} />}
        />
        <Route
          path="/game"
          element={<Game />}
        />
      </Routes>
    </div>
  );
}

export default App;
