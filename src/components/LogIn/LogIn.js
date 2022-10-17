import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
const LogIn = () => {
   return (
     <div className="form-container" style={{ height: "750px" }}>
       <h3 className="form-title">LogIn</h3>
       <form>
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
           <h6 className="text-error">Error</h6>
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