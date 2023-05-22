/*import React from 'react'
import './index.css';

 export const APP = () => {
  return (
    <div>APP</div>
  )
}

export default APP;  always export the component as <default></default*/

import './APP.css';
import Header from './component/header/Header' 
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonial/Testimonial'
import Contact from './component/contact/Contact' 
import Footer from './component/footer/Footer'


 //THIS LINE INDICATE THAT
// ALL THE CONTENT OF THIS FILE SHOULD BE RENDERED IN THE ROOT ID OF THE HTML FILE


function App() {
  return (
  <>
<Header/>
<Navbar/>
<About/>
<Experience/>
<Services/>
<Portfolio/>
<Testimonial/>
<Contact/>
<Footer/>

</>

  );
  }

  export default App;
  
