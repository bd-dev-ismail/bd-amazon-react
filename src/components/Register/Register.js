import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="form-container" style={{ height: "750px" }}>
        <h3 className="form-title">Sign Up</h3>
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
          <div className="form-control">
            <label htmlFor="confrim">Confrim Password</label>
            <input
              type="password"
              name="confrim"
              id="confrim"
              placeholder="Confim password"
              required
            />
          </div>
          <div>
            <h6 className="text-error">Error</h6>
          </div>
          <input type="submit" value="Sign Up" className="btn-login" />
        </form>
        <p>
         Already have an account?
         <Link to="/login" style={{ color: "rgba(255, 153, 0, 1)" }}>
           Login Now
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

export default Register;