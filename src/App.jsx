// import { IoMdInformationCircleOutline } from "react-icons/io";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
