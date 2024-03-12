import './App.css';
import './sign-up.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./sign-up";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

    
 
export default App;
