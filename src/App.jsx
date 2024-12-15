import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Item from './componets/Item';
import Footer from './componets/Footer';
import Foodcartname from './componets/Foodcartname';
import Serve from './componets/Serve';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Item/>
      <Serve/>
      <Footer/>
    </>
  )
}

export default App
