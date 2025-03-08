import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { LogOut } from "lucide-react";

function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* <Link to='/'>Home</Link> */}
        <div className="text-xl font-bold text-stone-800">
          <h1 className="font-heading text-taupe">Task Tracker</h1>
        </div>
        <div className="flex items-center space-x-4">
          {Auth.loggedIn() ? (
            <>
           
              <button  onClick={logout} className="flex items-center gap-2 bg-taupe-500 text-white px-4 py-2 rounded-md hover:bg-taupe-600">
              <LogOut /> 
                Sign out
              </button>
             
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-heading text-stone-700 hover:text-melon"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="font-heading text-stone-700 hover:text-melon"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
