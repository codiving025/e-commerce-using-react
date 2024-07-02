import { Route, Routes } from 'react-router-dom';
import './App.css';
import Featured from './component/Featured';
import Trending from './component/Trending';
import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';
import Boot from './component/Boot';
import Formal from './component/Formal';
import Casual from './component/Casusl';
import Running from './component/Running';
function App() {
  return (
    <div>
    <Routes>
       <Route path='/' element= {<div><Trending/><Featured/></div>}/>
       <Route path='products' element= <Products/> />
       <Route path='about' element= <About/> />
       <Route path='contact' element= <Contact/> />
       <Route path='products/boot' element= <Boot/> />
       <Route path='products/formal' element= <Formal/> />
       <Route path='products/casual' element= <Casual/> />
       <Route path='products/running' element= <Running/> />
    </Routes>
    </div>
  );
}
export default App;