import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";



function App() {

  return (
  
      <div className="flex flex-col min-h-screen">
        <Header>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </Header>
        <Main/>
        <Footer></Footer>



       
       
      </div>
    
  );
}

export default App;
