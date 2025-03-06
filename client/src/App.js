import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
}
);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <header className="container mx-auto py-4">
          <NavBar />
        </header>
        
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={
              // <ErrorBoundary fallback={<p>Something went wrong</p>}>
              <Login />
            // </ErrorBoundary>
              } />
            <Route path="/signup" element={<Signup />} />

            <Route element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <footer className="container mx-auto py-4">
          <Footer />
        </footer>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
