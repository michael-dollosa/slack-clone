import "./App.scss";
import { useState } from "react";
import Main from "./pages/Main";
import ApiTestPage from "./ApiTestPage";
import Login from "./forms/Login/Login.js";
import Signup from "./forms/Signup/Signup.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
const App = () => {
  //header should be in headerData
  const [headerData, setHeaderData] = useState("");

  //create function to set  header data to child components
  const handleSetHeaderData = (data) => {
    console.log("header data");
    setHeaderData(data);
  };
  return (
    <Router>
      <div>
        <Switch>
         
          <Route path="/login">
            <Login handleSetHeaderData={handleSetHeaderData} />
          </Route>
          <Route path ="/signup">
            <Signup handleSetHeaderData={handleSetHeaderData} />
          </Route>
          <Route path="/*">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
      );
};

export default App;
