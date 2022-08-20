import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.clear();
    navigate("/login");
  });
  // return <div>Logging Out...</div>;
};

export default Logout
