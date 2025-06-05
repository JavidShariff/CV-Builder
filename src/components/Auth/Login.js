import React, { useState,useContext  } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { MyContext } from "../../context/MyContext";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import App from "../../App";
const Login = (props) => {
  const {setUid,setInfo,info,fetchRv} = useContext(MyContext);
  const navigate = useNavigate();
  const {setCurrentuser} = props;
  const login = ()=>{
    setCurrentuser(true)
  }
  const [Logif, setLogif] = useState({
    Email: "",
    Password: "",
  });


  const onchange = (e) => {
    setLogif({ ...Logif, [e.target.name]: e.target.value });
  };


  const onsubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, Logif.Email, Logif.Password)
    .then((userCredential) => {
      const user = userCredential.user;
      login();
      navigate("/introrv")
      localStorage.setItem("id", user.uid);
      setUid(`${localStorage.getItem("id")}`)

      })
      .catch((error) => {
        toast.error("Password is incorrect", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      });
  };


  return (
    <div>
      <>
        <div className="log">
          <h1>Login</h1>
          <form onSubmit={onsubmit}>
            <div className="inputform mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Enter Your Email
              </label>
              <input
                type="email"
                className="form-control"
                name="Email"
                onChange={onchange}
                id="exampleInputEmail"
              />
            </div>
            <div className="inputform mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="Password"
                id="exampleInputPassword1"
                onChange={onchange}
              />
            </div>
            <div className="inputform mb-3">
              <Link className="Link" to="/">
                Create a new account
              </Link>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </>
      <ToastContainer/>
    </div>
  );
};

export default Login;
