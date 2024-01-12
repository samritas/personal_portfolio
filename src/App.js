import Navigationbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
import'./App.css'
import Banner from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import React from "react";
import { Footer } from "./components/Footer";
import { ContactUs } from "./components/ ContactUs";


function App() {
  return( 
    <div className="app">
 
<Navigationbar/>
<Banner/>
<Skills/>
<Projects/>
<ContactUs/>
<Footer/>

 
  </div>
  );
}

export default App;
