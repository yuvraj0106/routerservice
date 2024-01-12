// import logo from './logo.svg';
// import './App.css';
import Home from'./component/Home.jsx';
import NavBar from './component/NavBar.jsx';
import Contact from './component/Contact.jsx';
import About from './component/About.jsx';
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
