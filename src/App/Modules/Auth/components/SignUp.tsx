import React, { useState, useEffect } from "react";
import useSignUp from "../hooks/useSignUp";
import { connect } from "react-redux";
import { Login } from "../store/ActionCreators";
import Spinner from "../../../Common/Spinner/Spinner";

interface Props {
  login: (email: string, password: string) => string;
  errmess: string;
  loading: boolean;
  tkn: string;
}

const SignUp: React.FunctionComponent<{
  login: Props["login"];
  errmess: Props["errmess"];
  loading: Props["loading"];
  tkn: Props["tkn"];
}> = ({ login, errmess, loading,tkn }): JSX.Element => {
  /*.........hook calls.......*/
  const [email, pass, handleChange] = useSignUp();
  const [err, setErr] = useState(errmess);
  useEffect(() => {
    setErr(errmess);
  }, [errmess]);
  /*.............handlers...................*/
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(email, pass);
    setErr("");
  };

  return (
    <div className="flex flex-col mt-7">
      <div className="grid justify-center mb-8">
        <h5 className="leading-2 text-center font-semibold">Sign In</h5>
      </div>
      <form onSubmit={handleSubmit}>
        {/* .........email input div............ */}
        <div className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            id="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* .........password input div............ */}
        <div className="flex justify-center mt-12">
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            id="pass"
            value={pass}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex justify-center mt-6 mb-3">
          <h5 className="text-red-700 text-center font-extrabold">{err}</h5>
        </div>
        {/* ................spinner................... */}
        <div className="flex justify-center mt-3">
          <Spinner loading={loading} />
        </div>
        {/* ............btn.............. */}
        <div className="flex justify-center mt-12 mb-4">
          <button
            type="submit"
            className="btn-submit"
            onClick={(e) => handleSubmit(e)}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, pass: string) => dispatch(Login(email, pass)),
});

const mapStateToProps = (state: any) => {
  return {
    errmess: state?.User?.errmess,
    loading: state?.User?.loading,
    tkn: state?.User?.tkn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
