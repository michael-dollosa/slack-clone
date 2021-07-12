import "./App.scss";
import { useState  }  from "react"
import Main from "./pages/Main";
import ApiTestPage from "./ApiTestPage"
import Login from "./forms/Login/Login.js"
const App = () => {
  //header should be in headerData
  const [headerData, setHeaderData] =  useState("")
  
  //create function to set  header data to child components
  const handleSetHeaderData = (data) => {
    console.log("header data")
    setHeaderData(data)
  }
  return (
    <div>
      <Login handleSetHeaderData={handleSetHeaderData}/>
    </div>
  );
};


  

export default App;
