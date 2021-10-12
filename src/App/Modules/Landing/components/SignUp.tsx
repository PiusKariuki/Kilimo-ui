import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col border shadow-md rounded mt-7">
      <div className="grid justify-center mb-8">
        <h5 className="leading-2 text-center font-semibold">Sign In</h5>
      </div>
      <form>
        {/* .........email input div............ */}
        <div className="flex justify-center mb-4 ">
          <input type="email" placeholder="Email" className="signup-input" />
        </div>
        {/* .........password input div............ */}
        <div className="flex justify-center mt-12">
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
          />
        </div>
        {/* ............btn.............. */}
        <div className="flex justify-center mt-12 mb-4">
           <button type="submit" className="btn-submit">SUBMIT</button> 
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;
