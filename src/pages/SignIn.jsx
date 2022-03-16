import React from "react";
import Header from "../components/Header/Header";
import SignInContent from "../components/SignInPage/SignInContent";

function SignIn() {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <SignInContent />
      </main>
    </div>
  );
}

export default SignIn;
