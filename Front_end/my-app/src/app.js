import  Navbar  from './components/Navbar'
import {  Routes, Route} from 'react-router-dom'
// import Offer from './pages/offer'
// import Register from './pages/register'
// import Login from './pages/login'
import React from "react";
import "./index.css";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DataFetchin from "./pages/offer";
import CyberSecurity from "./pages/Cyber";
import Artificial_Intelligence from "./pages/IA";
import Devops from "./pages/Devops";
import Web_Development  from "./pages/WEB";
import Profile from "./pages/Profile";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateProj from "./pages/AddProj"
import CreateOffer from "./pages/AddOffer"


import './App.css'

// import Mode from './components/mode'

function App() {
  return (
    
     <div className="font-lato bg-light-1 min-h-screen flex flex-col">
    
    <Navbar />
 
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/CyberSecurity" element={<CyberSecurity />} />
           <Route path="/Artificial_Intelligence" element={<Artificial_Intelligence />} />
           <Route path="/devops" element={<Devops />} />
           <Route path="/Web_Development" element={<Web_Development />} />

           <Route path="/offers" element={<DataFetchin/>} />
           <Route path="/contact" element={<Contact />} />
           <Route path='/auth/login' element={<LoginScreen />} /> 
           <Route path='/auth/register' element={<RegisterScreen />} /> 
           <Route path="/profile" element={<Profile/>} />
           <Route path="/create_Project" element={<CreateProj/>} />
           <Route path="/create_Offer" element={<CreateOffer/>} />




      </Routes>
      </div>

  );
}

export default App;

// function MyApp() {
//   return (
//     <div className="font-lato bg-light-1 min-h-screen flex flex-col">
//        <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Offer />} /> 
//         <Route path='/auth/login' element={<Login />} /> 
//         <Route path='/auth/register' element={<Register />} /> 
//       </Routes>
//     </Router>
//     </div>
//   )
// }

// export default MyApp
