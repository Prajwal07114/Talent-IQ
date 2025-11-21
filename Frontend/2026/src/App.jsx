import {useState} from "react";
import "./App.css";
import { SignedOut,SignInButton, SignOutButton,SignedIn, UserButton } from "@clerk/clerk-react";

function App(){
  return(
    <>
    <h1>Welcome To Talent Hunt</h1>
    <SignedOut><SignInButton mode="modal">
      <button className="ff">Hello</button>
    </SignInButton>
    </SignedOut>
    <SignedIn><SignOutButton/></SignedIn>
    <UserButton/>
    </>
  )
}

export default App;