import { useMutation } from "@apollo/client";
import React, {  useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { error }] = useMutation(LOGIN_USER);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }

    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      Auth.login(data.login.token);
      if (data) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-w-full min-h-3/4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xlw-full p-8">
        <h2 className="font-heading text-2xl text-taupe-600 mb-6 flex items-center justify-center gap-2">
          <Lock className="text-melon" /> Login{" "}
        </h2>

        <form id="login" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full mb-4 px-4 py-2 rounded-md border border-silver-300 bg-isabelline-DEFAULT text-charcoal focus:outline-none focus:border-melon transition"
              placeholder="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full mb-6 px-4 py-2 rounded-md border border-silver-300 bg-isabelline-DEFAULT text-charcoal focus:outline-none focus:border-melon transition"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              required
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 bg-red-100 border border-red-400 p-2 rounded-md">
              ⚠️ Login failed: {error.message}
            </p>
          )}

          <br />
          <button
            type="submit"
            className="w-full bg-melon text-isabelline py-2 rounded-lg font-heading hover:bg-amber-700 transition duration-300 ease-in-out"
          >
            Sign In
          </button>
          <div className="text-center text-softgray mt-4">
            Don't have an account?{" "}
            <span className="text-melon cursor-pointer">
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
