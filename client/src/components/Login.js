import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [info, setInfo] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login", info)
    .then(response => {
      console.log("Success", response);
      localStorage.setItem("token", response.data.payload)
      props.history.push("/colors")
    })
    .catch(error => console.log("Error", error.response));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="username"
        placeholder="Username"
        value={props.username}
        onChange={handleChanges}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={handleChanges}
      />
      <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
