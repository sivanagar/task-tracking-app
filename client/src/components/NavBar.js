import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { LogOut, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const logout = (event) => {
    
    Auth.logout();
    navigate("/");

  };

  return (
    // <nav className="bg-white shadow">
    //   <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    //     {/* <Link to='/'>Home</Link> */}
    //     <div className="text-xl font-bold text-stone-800">
    //       <h1 className="font-heading text-taupe">Task Tracker</h1>
    //     </div>
    //     <div className="flex items-center space-x-4">
    //       {Auth.loggedIn() ? (
    //         <>
           
    //           <button  onClick={logout} className="flex items-center gap-2 bg-taupe-500 text-white px-4 py-2 rounded-md hover:bg-taupe-600">
    //           <LogOut /> 
    //             Sign out
    //           </button>
             
    //         </>
    //       ) : (
    //         <>
    //           <Link
    //             to="/login"
    //             className="font-heading text-stone-700 hover:text-melon"
    //           >
    //             Login
    //           </Link>
    //           <Link
    //             to="/signup"
    //             className="font-heading text-stone-700 hover:text-melon"
    //           >
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className=" mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <ClipboardCheck className="text-melon w-8 h-8" />
        <span className="font-heading text-2xl font-bold text-taupe hover:text-melon transition">
          Task Tracker
        </span>
      </Link>

      <div className="flex items-center space-x-6 font-body">
        {Auth.loggedIn() ? (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="flex items-center gap-2 bg-taupe-500 text-isabelline px-5 py-2 rounded-xl hover:bg-taupe-600 transition duration-200"
            >
              <LogOut className="w-5 h-5" />
              Sign out
            </motion.button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-taupe hover:text-melon transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-melon text-isabelline px-4 py-2 rounded-xl hover:bg-terracotta transition duration-200"
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
