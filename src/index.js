import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,BrowserRouter} from 'react-router-dom';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter
import App from "./App";
import "./css/base.css";
import "./js/rem";
ReactDOM.render( 
        <Router>
          <App/>
        </Router> 
    ,
    document.querySelector('#app')
)

