// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import {HashRouter,BrowserRouter} from 'react-router-dom';
import React from "react";
import "./css/base.css";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store";
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter


// import "./css/base.css";
// import "./js/rem";
ReactDOM.render( 
        <Provider store={store}>
            <Router>
                <App/>
            </Router> 
        </Provider>
    ,
   document.getElementById('root')
)