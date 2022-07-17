import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const ChangePassword =() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const Change = async () => {
    const data = { email, password, cpassword };
    try {
      const resp = await axios.post(
        "http://localhost:5000/auth/changepassword",
        data
      );

      if (resp.status === 201) {
        console.log(resp.data);
      } else {
        alert("Error");
        console.error(resp);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setEmail("");
      setPassword("");
      setCpassword("");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          placeholder="Confirm Password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={Change
        }>Change Password</Button>
      </div>
    </div>
  );
};

export default ChangePassword;
