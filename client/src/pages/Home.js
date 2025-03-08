import React from "react";
import { Link } from "react-router-dom";
// import { ClipboardCheck } from "lucide-react";
import TaskPana from "../assets/Task-pana.svg";
import { ClipboardCheck, ArrowRight } from "lucide-react";
import auth from "../utils/auth"; 

export default function Home() {
  return (
    <div className="min-h-3/4 flex flex-col items-center justify-center px-6">
      <header className="text-center mb-8">
        <h1 className="font-heading text-5xl font-bold text-taupe mb-4 flex items-center justify-center gap-2">
          <ClipboardCheck className="text-melon w-10 h-10" />
          Task Tracker
        </h1>
        <p className="font-body text-battleship_gray text-xl max-w-xl">
          Effortlessly organize, track, and complete your tasks. Beautifully simple task management designed for everyday productivity.
        </p>
      </header>
      <a href="https://storyset.com/work">
      <img src={TaskPana} alt="Task illustration" className="w-full max-w-md mb-8" /></a>

      <div className="flex gap-4">
      {auth.loggedIn() ? (
        <Link
        to="/dashboard"
        className="bg-melon text-isabelline text-xl px-6 py-2 rounded-xl shadow-md hover:bg-terracotta transition ease-in-out duration-300  flex items-center gap-2 justify-center"
      >
        View My Task <ArrowRight className="w-5 h-5" />
      </Link>
      ) : (
        <Link
          to="/signup"
          className="bg-melon text-isabelline text-xl px-6 py-2 rounded-xl shadow-md hover:bg-terracotta transition ease-in-out duration-300  flex items-center gap-2 justify-center"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>)}
      
      </div>
    </div>
 
  );
}
