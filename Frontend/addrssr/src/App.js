import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path = "/contacts" element = {<LoginPage />}></Route>
      <Route path = "/register" element = {<RegisterPage />}></Route>
      <Route path = "/" element = {<ContactsPage />}></Route>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
