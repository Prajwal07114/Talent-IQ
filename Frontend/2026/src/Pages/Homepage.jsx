import React from 'react'
import { SignedOut,SignInButton, SignOutButton,SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import toast from 'react-hot-toast';

const Homepage = () => {
  return (
    <div>
      <button onClick={()=>toast.error("Mat kar lala mat kar")}>Awaam</button>
       <SignedOut><SignInButton mode="modal">
      <button className="text-red-500 bg-black" onClick={()=>toast.success("LALA WORKING")}>Hello</button>
    </SignInButton>
    </SignedOut>
    <SignedIn><SignOutButton/></SignedIn>
    <UserButton/>
    </div>
  )
}

export default Homepage
