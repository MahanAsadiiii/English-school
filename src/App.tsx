import "./App.css"
import './styles/global.css';
// import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/index'; 
import { AboutUs } from "./pages/AboutUs";


const App: React.FC = () => {
  return (
    <>
    
    <Home/>
    <AboutUs/>
    </>
    // <Routes>
    //   <Route path='/' element={<Home/>} />
    //   <Route path='/about-us' element={<AboutUs/>} />
    // </Routes>
  );
}

export default App;
