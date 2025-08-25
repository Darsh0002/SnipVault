import React from "react";
import AllSnippets from "./components/AllSnippets";
import Snippet from "./components/Snippet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/landingPage/Home";
import NewSnippet from "./components/NewSnippet";
import Dashboard from "./components/Dashboard";
import Login from "./components/landingPage/Login";
import SignUp from "./components/landingPage/SignUp";

const router = createBrowserRouter([
  
  {
    path: "/",
    element:
      <Home/>
  },
  {
    path: "/login",
    element:
      <Login/>
  },
  {
    path: "/signup",
    element:
      <SignUp/>
  },
  {
    path: "/dashboard",
    element:
      <>
        <Navbar user={{ name: "Darsh" }}/>
        <Dashboard/>
      </>
  },
  {
    path: "/snippets",
    element: <>
      <Navbar user={{ name: "Darsh" }}/>
      <AllSnippets/>
    </>,
  },
  {
    path: "/snippet/:id",
    element: <>
      <Navbar user={{ name: "Darsh" }}/>
      <Snippet/>
    </>,
  },
  {
    path: "/snippet/new",
    element: <>
      <Navbar user={{ name: "Darsh" }}/>
      <NewSnippet/>
    </>,
  },
]);

const App = () => {
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
