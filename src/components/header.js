import React from "react";
import img from "../assets/LOGO.png"
const Header=()=>{
    return (
      <div className="header">
        <div className="subscription-section">
            <button>
                Subscribe
            </button>
        </div>

        <div className="image-section">
         <h1>
            Stay Connected
         </h1>
        </div>
        <div className="login-section">
          <button> Login</button>
          <button>Register</button>
      
        </div>
      </div>
    );
}


export default Header