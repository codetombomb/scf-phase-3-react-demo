import React, { useState } from "react";


function Login({onLoginSubmit}) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = ({target}) => {
        const stateCopy = {...credentials}
        stateCopy[target.name] = target.value
        setCredentials(stateCopy)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onLoginSubmit(credentials)
        setCredentials({
            username: "",
            password: ""
        })
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleInputChange} value={credentials.username}></input>
        <label>Password</label>
        <input type="password" name="password" onChange={handleInputChange} value={credentials.password}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Login;
