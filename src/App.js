import "./App.scss";
import { useState } from "react";
import Main from "./pages/Main";
import Login from "./forms/Login/Login.js";
import Signup from "./forms/Signup/Signup.js"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"



const App = () => {
  //header should be in headerData
  const [loginData, setLoginData] = useState("");

  //create function to set  header data to child components
  const handleSetLoginData = (data) => {
    console.log("header data", data);
    setLoginData(data);
  };
  

  return (
    <Router>
      <div> 
        <Switch>
          <Route path="/signup">
            <Signup handleSetLoginData={handleSetLoginData} />
          </Route>
          <Route path="/login">
            <Login handleSetLoginData={handleSetLoginData} />
          </Route>
          <Route path="/">
          { 
            loginData 
            ? <Main loginData={loginData}/> 
            : <Redirect to="/login" />
          }
          </Route>
        </Switch>

      </div>
      </Router>
  );
};

export default App;