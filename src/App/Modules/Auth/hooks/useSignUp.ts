import React, { useState } from "react"


const useSignUp = () => {
    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.id) {
        case "email": {
          setEmail(e.target.value);
          break;
        }
        case "pass": {
          setPass(e.target.value);
          break;
        }
        default:
          return "Not found";
      }
    };


    return [email,pass, handleChange,setEmail,setPass] as const;
}

export default useSignUp;