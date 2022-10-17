import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './LogIn.css';
const LogIn = () => {
  const [error , setError] = useState(null);
  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handalLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
    .then(result =>{
      const user = result.user;
      form.reset();
      navigate(from, {replace: true});
      console.log(user);
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  }
   return (
     <div className="form-container" style={{ height: "750px" }}>
       <h3 className="form-title">LogIn</h3>
       <form onSubmit={handalLogin}>
         <div className="form-control">
           <label htmlFor="email">Email</label>
           <input
             type="email"
             name="email"
             id="email"
             placeholder="Enter Your Email"
             required
           />
         </div>
         <div className="form-control">
           <label htmlFor="password">Password</label>
           <input
             type="password"
             name="password"
             id="password"
             placeholder="Enter Your password"
             required
           />
         </div>
         <div>
           <h6 className="text-error">{error}</h6>
         </div>
         <input type="submit" value="LogIn" className="btn-login" />
       </form>
      
       <p>
         New In Ema-John?
         <Link to="/register" style={{ color: "rgba(255, 153, 0, 1)" }}>
           Register Now
         </Link>
       </p>
       <div style={{ textAlign: "center" }}>Or</div>
       <button className="btn-google">
         <i
           className="fa-brands fa-google"
           style={{
             color: "rgba(235, 67, 53, 1)",
             marginRight: "20px",
             fontSize: "21px",
           }}
         ></i>
         Sign In With Google
       </button>
     </div>
   );
};

export default LogIn;