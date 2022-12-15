import React from "react";
import Navbar from "./components/navbar";
import NewsComponent from "./components/NewsComponent";
import "./components/App.css";

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <NewsComponent />
      </div>
    );
  }
}

export default App;