import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error404 from "./pages/Error404";

const home = "/";
const signIn = "/sign-in";
const user = "/user/:id";
const error = "/error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path={home} element={<Home />}></Route>
        <Route path={signIn} element={<SignIn />}></Route>
        <Route path={user} element={<User />}></Route>
        <Route path={error} element={<Error404 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;