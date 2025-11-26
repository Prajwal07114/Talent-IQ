
import { SignedOut,SignInButton, SignOutButton,SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Routes,Route, Navigate} from "react-router";
import Homepage from "./Pages/Homepage";
import Problemspage from "./Pages/Problemspage";
import Dashboard from "./Pages/Dashboard";
import { Toaster } from "react-hot-toast";
import Leaderboardpage from "./Pages/Leaderboardpage";
import Problempage from "./Pages/Problempage";

function App(){   
      const {isSignedIn} = useUser()
        return(
<>
    <Routes>
   <Route path="/" element={!isSignedIn?<Homepage/> : <Navigate to={"/dashboard"}/>}></Route>
       <Route path="/dashboard" element={isSignedIn? <Dashboard/> : <Navigate to={"/"}/>} /> 
   <Route path="/Problems" element={isSignedIn ? <Problemspage/> : <Navigate to={"/"}/>}></Route> 
   <Route path="/problem/:id" element={isSignedIn? <Problempage/> : <Navigate to={"/"}/>}></Route>
   <Route path="/leaderboard" element={isSignedIn? <Leaderboardpage/>:<Navigate to={'/'} />}></Route>
    </Routes>

    <Toaster/>
    </>
  )
}

export default App;