import React from 'react';
import ReactDOM from 'react-dom';
import ApiTestPage from './ApiTestPage';
import App from './App';
import "./index.scss"
import Main from "./pages/Main"

ReactDOM.render(
    // <ApiTestPage />, //use this if you want to test API
    <Main />,
  document.getElementById('root')
);
