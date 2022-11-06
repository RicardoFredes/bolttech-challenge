import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign-up</Link>
    </main>
  );
};
