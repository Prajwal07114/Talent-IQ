
import { SignedOut,SignInButton, SignOutButton,SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Routes,Route, Navigate} from "react-router";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Problemspage from "./Pages/Problemspage";
import { Toaster } from "react-hot-toast";

function App(){   
      const {isSignedIn} = useUser()
        return(
<>
    <Routes>
   <Route path="/" element={<Homepage/>}></Route>
       <Route path="/About" element={<Aboutpage/>}></Route>
   <Route path="/Problems" element={isSignedIn ? <Problemspage/> : <Navigate to={"/"}/>}></Route>

    </Routes>

    <Toaster/>
    </>
  )
}

export default App;