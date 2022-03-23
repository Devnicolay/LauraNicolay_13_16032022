import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const home = "/";
const login = "/login";
const user = "/profil";
const error = "/error";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path={home} element={<Home />}></Route>
        <Route path={login} element={<Login />}></Route>
        <Route path={user} element={<Profile />}></Route>
        <Route path={error} element={<Error404 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
