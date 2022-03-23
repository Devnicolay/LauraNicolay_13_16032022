import React from "react";
import Header from "../components/Header/Header";
import Features from "../components/HomePage/Features";
import Hero from "../components/HomePage/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default Home;
