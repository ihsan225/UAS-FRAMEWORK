import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./landingpage/Home";
import About from "./landingpage/About";
import Contact from "./landingpage/Contact";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import UsersEdit from './components/UsersEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adduser" element={<><Navbar /><AddUser /></>} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} /> 
        <Route path="/users" element={<><Navbar /><Users /></>} /> 
        <Route path="/useredit" element={<><Navbar /><UsersEdit /></>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
