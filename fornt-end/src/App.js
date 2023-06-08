import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Components</h1>} />
          <Route path="/add" element={<h1>Add Product Components</h1>}/>
          <Route path="/update" element={<h1>update Product Components</h1>}/>
          <Route path="/logout" element={<h1>Logout</h1>}/> 
          <Route path="/profile" element={<h1>Profile</h1>}/>
          <Route path="/signup" element={<h1>SignUp</h1>}/>
     </Routes>
          <SignUp />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
