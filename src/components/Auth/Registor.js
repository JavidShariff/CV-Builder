import React, { useState,useContext  } from "react";
import { Link,useNavigate } from "react-router-dom"
import "./Registor.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { MyContext } from "../../context/MyContext";
// import { toast,Bounce } from "react-toastify";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registor = () => {
  const {setUid} = useContext(MyContext);
  const navigate = useNavigate();
  
  const [Regif, setRegif] = useState({
    Username: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
  });

  const onchange = (e) => {
    setRegif({ ...Regif, [e.target.name]: e.target.value });
    console.log(Regif);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if(Regif.Password !== Regif.Confirmpassword){
      toast.error("Password is not matching", {
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
        return
    }
    createUserWithEmailAndPassword(auth, Regif.Email, Regif.Password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      navigate("/introrv")
      localStorage.setItem("id", user.uid);
      setUid(`${localStorage.getItem("id")}`)
      })
      .catch((error) => {
        // const errorCode = error.code;
        toast.error("Password must be atleast 6 letters and Email must be unique", {
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
        // ..
      });
  };
  return (
    <>
      <div className="Reg">
        <h1>Create Your Account</h1>
        <form onSubmit={onsubmit}>
          <div className="inputform mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Enter Your Username
            </label>
            <input
              type="text"
              name="Username"
              className="form-control"
              onChange={onchange}
              id="exampleInputUsername"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="inputform mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Enter Your Email
            </label>
            <input
              type="email"
              name="Email"
              className="form-control"
              onChange={onchange}
              id="exampleInputEmail"
            />
          </div>
          <div className="inputform mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter Your Password
            </label>
            <input
              type="password"
              name="Password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onchange}
            />
          </div>
          <div className="inputform mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="Confirmpassword"
              className="form-control mb-3"
              onChange={onchange}
              id="exampleInputPassword2"
            />
            <Link className="Link" to="/login">
              Already have a account?
            </Link>
          <button type="submit" className="btn my-2">
            Submit
          </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
export default Registor;
