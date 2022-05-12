import './App.css';
import Navber from './Shared/Navber';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Home/Appoinment';
import Reviews from './Pages/Home/Reviews';
import ContactUs from './Pages/Home/ContactUs';
import About from './Pages/Home/About';
import Login from './Pages/Home/Login';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="appoinment" element={<Appoinment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
