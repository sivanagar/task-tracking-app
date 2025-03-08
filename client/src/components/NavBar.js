import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* <Link to='/'>Home</Link> */}
        <div className="text-xl font-bold text-stone-800">
          <h1 className="font-heading text-taupe"> My App</h1>
        </div>
        <div className="mx-auto flex items-center space-x-4">
          <Link to="/dashboard" className="font-heading text-stone-700 hover:text-melon">
            Dashboard
          </Link>
          <Link to="/login" className="font-heading text-stone-700 hover:text-melon">
            Login
          </Link>
          <Link to="/signup" className="font-heading text-stone-700 hover:text-melon">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
