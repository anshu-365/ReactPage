import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import "./style/App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services.jsx";
import Error from "./components/Error";
import "./style/mediaquery.scss";


function App() {
  return (
    <Router>{/*it is use  to navigate  component....we can nevigte our project on different -2 pagesg without reloading the pages  ...it is possible because we connect our application with boroser network */}
      <Header/> {/* it will be static on website*/}
      <Routes>{/*it has multiple path so it basically use to wrapp the route */}
        <Route path="/"element={<Home/>}/>{/*it is use to specify path and that path what commpoenet  we have to run we write inside th element  */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>{/*it will be at bottom */}
    </Router>
  );
}

export default App;
