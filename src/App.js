import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/inventory/:productID' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
