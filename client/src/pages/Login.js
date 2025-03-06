import { useMutation } from "@apollo/client";
import { React, useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    console.log("login");
    e.preventDefault();
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }

    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
   
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-stone-800 mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-stone-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div>
          <label className="block mb-2 text-stone-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>
        <br />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
