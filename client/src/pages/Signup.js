import { React, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

  const [register] = useMutation(REGISTER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({
        variables: { email, password, username },
      });
      Auth.login(data.register.token);
      //navigate to dashboard
      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-w-full min-h-3/4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xlw-full p-8">
        <h2 className="font-heading  text-2xl text-taupe-600 mb-6 flex items-center justify-center gap-2">
          <UserPlus className="text-melon" /> Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full mb-4 px-4 py-2 rounded-md border border-silver-300 bg-isabelline-DEFAULT text-charcoal focus:outline-none focus:border-melon transition"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              autoComplete="username"
              onChange={(e) => setusername(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-md border border-silver-300 bg-isabelline-DEFAULT text-charcoal focus:outline-none focus:border-melon transition"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full mb-4 px-4 py-2 rounded-md border border-silver-300 bg-isabelline-DEFAULT text-charcoal focus:outline-none focus:border-melon transition"
              placeholder="Password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="w-full bg-melon text-isabelline py-2 rounded-lg font-heading hover:bg-amber-700 transition duration-300 ease-in-out"
          >
            Signup
          </button>
          <div className="mt-4 text-center text-softgray">
            Already registered?{" "}
            <span className="text-melon cursor-pointer">
            <Link to="/login">
              Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
   
  );
}
