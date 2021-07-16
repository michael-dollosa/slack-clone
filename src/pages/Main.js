import ChatContainer from "../components/Chat/ChatContainer.js/ChatContainer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAllUsers, getChannels, getInteractedUsers } from "../api/api";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Main.scss";
import AddChannel from "../components/Sidebar/AddChannel";
import ChatNewMessage from "../components/Chat/ChatNewMessage/ChatNewMessage";
import SearchBar from "../components/Header/Search/HeaderSearch"
import Loader from "../components/Loader/Loader";

const Main = ({ loginData }) => {

  //declare states for application data
  const [userChannels, setUserChannels] = useState(""); //state to get channel data
  const [userList, setUserList] = useState("");
  const [userInteractedList, setUserInteractedList] = useState(""); //state to get user Lists/ users that have messaged current user and/or was messaged by current user
  //add channel toggle (test)
  const [toggleAddChannel, setToggleAddChannel] = useState(false);
  const [dummyAddChannel, setDummyAddChannel] = useState(true);
  const [toggleSearchBar, setToggleSearchBar] = useState(false)
  const [toggleRender, setToggleRender] = useState(false)
  //user details
  const [userHeaders, setUserHeaders] = useState("");
  const [userDetails, setUserDetails] = useState("");

  const handleDummyAddChannel = () => {
    setDummyAddChannel(!dummyAddChannel);
  };

  const handleAddChannelToggle = () => {
    setToggleAddChannel(!toggleAddChannel);
  };

  const handleToggleSearch = () => {
    setToggleSearchBar(!toggleSearchBar)
  }

  const handleToggleRender = () => {
    setToggleRender(!toggleRender)
  }

  //close toggle add channel
  const handleClose = () => setToggleAddChannel(false);

  

  useEffect(() => {
    //set User Details
    setUserDetails(loginData.data);
    //set Header details required for API
    const headers = {
      token: loginData.headers["access-token"],
      client: loginData.headers.client,
      expiry: loginData.headers.expiry,
      uid: loginData.headers.uid,
    };

    // console.log(loginData.data.data.id)
    setUserHeaders(headers);
    //trigger getChannel API to get list of channels for current user
    getChannels(headers)
      .then((data) => {
        setUserChannels(data);
      })
      .catch((err) => console.log("Get Channel Function Error:", err));
    //trigger userApi for private message user list
    getAllUsers(headers)
      .then((data) => setUserList(data))
      .catch((err) => console.log(err));
    getInteractedUsers(headers)
      .then((data) => setUserInteractedList(data.data.data))
      .catch((err) => console.log("Fetch Interacted Users Error: ", err));
      
  }, [dummyAddChannel, toggleSearchBar, toggleRender]);

  //always have a condition to render a Loading state
  //since we are using API which is asynchronus, components will mount even without the data. Since our components uses data, we need first to set a condition to render nothing while data is being populated
  //if we don't do this, our components will have an error -> usually error regarding no data, or data in the variable being used is undefined
  if (
    !userChannels.data ||
    !userList.data ||
    !userList.data.data.length ||
    !userInteractedList
  ) {
    return <Loader />;
  }

  return (
    <main className="main-container">
      <Router>
          { 
            toggleSearchBar
            ? <SearchBar handleToggleSearch={handleToggleSearch} headers={userHeaders}/> 
            : null
          }

          {toggleAddChannel ? (
            <AddChannel
              headers={userHeaders}
              handleDummyAddChannel={handleDummyAddChannel}
              handleClose={handleClose}
            />
          ) : null}
      
          <header>
            <Header userID={userDetails.data.id} handleToggleSearch={handleToggleSearch}/>
          </header>

          <nav>
            <Sidebar
              channels={userChannels}
              interactedUsers={userInteractedList}
              handleAddChannelToggle={handleAddChannelToggle}
              toggleRender={toggleRender}
              userDetails={userDetails}
            />
          </nav>

          <section>
            <Switch>
              <Route path="/:type/:id">
                <ChatContainer headers={userHeaders} userDetails={userDetails} handleToggleRender={handleToggleRender}/>
              </Route>
              <Route exact path="/new-message">
                <ChatNewMessage headers={userHeaders} />
              </Route>
            </Switch>
          </section>
      </Router>
    </main>
  );
};

export default Main;
