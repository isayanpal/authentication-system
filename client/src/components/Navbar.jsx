import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link to="/">
        <h1 className="text-3xl">AuthDB</h1>
      </Link>
      <ul className="flex gap-6">
        {isUserLoggedIn ? (
          <>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Signup</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
