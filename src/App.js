import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/login/SignUpForm";
import LoginForm from "./components/login/LoginForm";
import Cart from "./components/cart/Cart";
import DataProvider from "./context/DataProvider.js";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
