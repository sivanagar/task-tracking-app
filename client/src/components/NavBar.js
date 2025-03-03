import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* <Link to='/'>Home</Link> */}
        <div className="text-xl font-bold text-stone-800">My App</div>
        <div className="mx-auto flex items-center space-x-4">
        <Link to="/dashboard" className="text-stone-700 hover:text-green-600">
          Dashboard
        </Link>
        <Link to="/login" className="text-stone-700 hover:text-green-600">
          Login
        </Link>
        <Link to="/signup" className="text-stone-700 hover:text-green-600">
          Signup
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
