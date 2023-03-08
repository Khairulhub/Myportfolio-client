import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const SequreForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const inputemail = (e) => {
    setEmail(e.target.value);
  };
  const inputpassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
      setUser({email,password})
    // setUser(user);
    if (user.email === "iubat21103033@gmail.com" && user.password === "m.k.i.r.") {
      console.log("success");
      document.location.replace("/addportfolioform");
      
    }
  };
  return (
    <div className="bg-[#0b111e]  w-full h-screen">
      <div className="max-w-[1240px]    text-center mx-auto py-[180px] ">
        <div className="flex justify-center align-middle">
          <form onSubmit={handleSubmit} className="w-9/12 ">
            <input
              onChange={inputemail}
              value={email}
              id="user-email"
              className=" p-2 border rounded block w-3/4 mx-auto m-1"
              type="email"
              placeholder="Enter your email: sontan@bap.com"
            />
            <input
              onChange={inputpassword}
              value={password}
              id="user-password"
              className=" p-2 border rounded block w-3/4 mx-auto m-1"
              type="password"
              placeholder="Password: khairul"
            />
            <button
              type="submit"
              id="login-btn"
              className="bg-yellow-300 px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SequreForm;
