import React, { Component } from "react";
import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import Home from "./pages/Home";
import 'antd/dist/antd.css';
import "./css/nav.css";
import "./pages/goods";
import Fenlei from "./pages/Fenlei";
import Goods from "./pages/goods";
import History from "./pages/history";
import Search from "./pages/search";
import Searchgood from "./pages/Searchgood";
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render (){
       return <div>
           <Switch>
               <Route path="/home" component={Home}></Route>
               <Route path="/goods" component={Goods}></Route>
               <Route path="/fenlei" component={Fenlei}></Route>
               <Route path="/history" component={History}></Route>
               <Route path="/search" component={Search}></Route>
               <Route path="/searchgood" component={Searchgood}></Route>
               <Redirect from="/" to="/home" exact />
           </Switch>
       </div>
    };
}
App = withRouter(App);
export  default App;