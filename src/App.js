import Navigationbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
import'./App.css'
import Banner from "./components/Banner";
import { Skills } from "./components/Skills";


function App() {
  
  return( 
    <div className="app">
 
<Navigationbar/>
<Banner/>
<Skills/>
 
  </div>
  );
}

export default App;
