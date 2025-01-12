import Loginform from './components/loginform'
import AOS from 'aos';
import { useEffect } from 'react';

import './App.css'

function App() {
  useEffect(() => { AOS.init(); AOS.refresh();}, []);

  return (
    <>
    <Loginform data-aos="fade-up" data-aos-anchor=".other-element" data-aos-duration></Loginform>
      
    </>
  )
}

export default App
