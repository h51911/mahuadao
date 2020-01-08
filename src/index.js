import ReactDOM from "react-dom";
import {HashRouter,BrowserRouter} from 'react-router-dom';
import React from "react"
import App from "./App";
import "./css/base.css";
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

// import "./js/rem";
ReactDOM.render( 
        <Router>
          <App/>
        </Router> 
    ,
    document.querySelector('#root')
)

// 00000 14:02:39
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import '../public/rem'
// // import 'lib-flexible'
// import * as serviceWorker from './serviceWorker';
// import {HashRouter,Route} from 'react-router-dom';

// ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
