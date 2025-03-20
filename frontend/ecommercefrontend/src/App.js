import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Home from './components/pages/Home/Home';
import SubcategoryPage from './components/pages/Subcategory/Subcategory'
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='' element={<Home />} />
        <Route path='/category/:categoryName/:subcategoryName' element={<SubcategoryPage />} />
      </Routes> 
    <Footer />
    </>
        
       
  )
}

export default App;
