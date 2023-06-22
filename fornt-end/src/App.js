import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/login';
import Products from './components/Product';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>

          <Route path="/products" element={<ProductList />} />
          <Route path="/add" element={<Products/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1>Logout</h1>}/> 
          <Route path="/profile" element={<h1>Profile</h1>}/>
          
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
     </Routes>
          {/* <SignUp /> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
