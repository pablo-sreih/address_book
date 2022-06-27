import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactsPage from './pages/ContactsPage';
import AddContactPage from './pages/AddContactPage';
import LocationPage from './pages/LocationPage';

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path = "/" element = {<LoginPage />}></Route>
      <Route path = "/register" element = {<RegisterPage />}></Route>
      <Route path = "/contacts" element = {<ContactsPage />}></Route>
      <Route path = "/add-contact" element = {<AddContactPage />}></Route>
      <Route path = "/location" element = {<LocationPage />}></Route>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
