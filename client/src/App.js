import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL
  

});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <header className=" mx-auto">
          <NavBar />
        </header>

        <div className="min-h-screen bg-cream flex flex-col">
          <main className="container mx-auto px-4 py-6 flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route element={<h1>Not Found</h1>} />
            </Routes>
          </main>
          <footer >
            <Footer />
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
