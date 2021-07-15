import ChatContainer from "../components/Chat/ChatContainer.js/ChatContainer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAllUsers, getChannels, getMessage } from "../api/api";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Main.scss";
import AddChannel from "../components/Sidebar/AddChannel";

const Main = ({ loginData }) => {
  //declare states for application data
  const [userChannels, setUserChannels] = useState(""); //state to get channel data
  const [userList, setUserList] = useState(""); //state to get user Lists/ users that have messaged current user and/or was messaged by current user
  //add channel toggle (test)
  const [toggleAddChannel, setToggleAddChannel] = useState(false);
  const [dummyAddChannel, setDummyAddChannel] = useState(true);
  
  const handleDummyAddChannel = () => {
    setDummyAddChannel(!dummyAddChannel);
  };

  const handleAddChannelToggle = () => {
    setToggleAddChannel(!toggleAddChannel);
  };

  //declare hardcoded header value of current user
  //this must be replaced by a prop that is passed down from App component when user logs in
  // const headers = {
  //   token: "bmYDmIK8a7OPeUt73qJ8JQ",
  //   client: "qWGX141QEphMy7EYsGdHMQ",
  //   expiry: 1627457531,
  //   uid: "steph@gmail.com",
  // };
  const [userHeaders, setUserHeaders] = useState("");
  const [userDetails, setUserDetails] = useState("");

  //declare hardcoded header value of current user
  //this must be replaced by a prop that is passed down from App component when user logs in
  // const headers = {
  //   token: "bmYDmIK8a7OPeUt73qJ8JQ",
  //   client: "qWGX141QEphMy7EYsGdHMQ",
  //   expiry: 1627457531,
  //   uid: "steph@gmail.com"
  // }

  useEffect(() => {
    console.log("useEffect");
    //set User Details
    setUserDetails(loginData.data);
    //set Header details required for API
    const headers = {
      token: loginData.headers["access-token"],
      client: loginData.headers.client,
      expiry: loginData.headers.expiry,
      uid: loginData.headers.uid,
    };
    setUserHeaders(headers);
    //trigger getChannel API to get list of channels for current user
    getChannels(headers)
      .then((data) => {
        console.log("channel data", data)
        setUserChannels(data)})
      .catch((err) => console.log("Get Channel Function Error:", err));
    //trigger userApi for private message user list
    getAllUsers(headers)
      .then((data) => setUserList(data))
      .catch((err) => console.log(err));
  }, [dummyAddChannel]);

  //render

  //always have a condition to render a Loading state
  //since we are using API which is asynchronus, components will mount even without the data. Since our components uses data, we need first to set a condition to render nothing while data is being populated
  //if we don't do this, our components will have an error -> usually error regarding no data, or data in the variable being used is undefined
  if (!userChannels.data || !userList.data || !userList.data.data.length) {
    return <h1>Loading</h1>;
  }

  return (
    <main className="main-container">
      {toggleAddChannel ? (
        <AddChannel
          headers={userHeaders}
          handleDummyAddChannel={handleDummyAddChannel}
        />
      ) : null}
      <Router>
        <header>
          <Header />
        </header>

        <nav>
          <Sidebar
            channels={userChannels}
            users={userList}
            handleAddChannelToggle={handleAddChannelToggle}
          />
        </nav>

        <section>
          <Switch>
            <Route path="/:type/:id">
              <ChatContainer headers={userHeaders} userDetails={userDetails}/>
            </Route>
          </Switch>
        </section>
      </Router>
    </main>
  );
};

export default Main;
