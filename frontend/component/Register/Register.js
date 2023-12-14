import React, { Fragment, useRef,useState, useEffect } from "react";
import "./Register.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { clearErrors,login } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Register=()=>{

{/*
const Register = ({history,location}) => {

 
  const dispatch=useDispatch();
  const {error,isAuthenticated}=useSelector((state)=>state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail,loginPassword));
  };

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    console.log("Sign up form submitted");




   const redirect = location.search ? location.search.split("=")[1] : "/";

 useEffect(() => {
    if (error) {
     // alert.error(error);
      dispatch(clearErrors());
    }
   
   if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, history,isAuthenticated,redirect]);*/}


  return (

   
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p style={{fontSize:"25px",marginTop:"20px"}}>REGISTER</p>
                 
                </div>
               
              </div>
              <form className="loginForm"  >
                <div className="loginEmail">
                <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    //value={loginEmail}
                   // onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Create Password"
                    required
                    //value={loginPassword}
                    //onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    //value={loginPassword}
                   // onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/login">
              
                <input type="submit" value="Register" className="loginBtn" />
                </Link>
              </form>
             
            </div>
          </div>
     
    </Fragment>
  );
};
  

export default Register;