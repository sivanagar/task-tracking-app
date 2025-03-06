import { React, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

  const [register] = useMutation(REGISTER);

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log({ email, password, username })
    try {
      const { data } = await register({
        variables: { email, password, username },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">

<h2 className="text-xl font-semibold text-stone-800 mb-4">Signup</h2>
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
          <label className="block mb-2 text-stone-700">User name</label>
          <input
            type="text"
            placeholder="user name"
            value={username}
            autoComplete="username"
            onChange={(e) => setusername(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"

          />
        </div>
        <div>
          <label className="block mb-2 text-stone-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"

          />
        </div>
        <br />
        <button type="submit"       className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >Signup</button>
      </form>
    </div>
  );
}
