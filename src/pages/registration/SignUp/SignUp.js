import React, { useState } from "react";


function SignUp({onSignUpSubmit}) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = ({ target }) => {
    const stateCopy = { ...userData };
    stateCopy[target.name] = target.value;
    setUserData(stateCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUpSubmit(userData);
    setUserData({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={userData.email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userData.password}
        ></input>
        <label>Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          onChange={handleInputChange}
          value={userData.password_confirmation}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default SignUp;
