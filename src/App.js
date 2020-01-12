import React, { Component } from "react";
import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import Home from "./pages/Home";
import 'antd/dist/antd.css';
import "./css/nav.css";
import "./pages/goods";
import Fenlei from "./pages/Fenlei";
import Goods from "./pages/goods";
import History from "./pages/History";
import Search from "./pages/search";
import Searchgood from "./pages/Searchgood";
import Paihang from "./pages/Paihang";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Mine from "./pages/Mine";
import My from "./pages/My";
import About from "./pages/About";
import Forget from "./pages/Forget";
import Fankui from "./pages/Fankui";
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
               <Route path="/fankui" component={Fankui}></Route>
               <Route path="/my" component={My}></Route>
               <Route path = "/about" component={About}></Route>
               <Route path="/login" component={Login}></Route>
               <Route path="/Reg" component={Reg}></Route>
               <Route path="/Mine" component={Mine}></Route>
               <Route path="/paihang" component={Paihang}></Route>
               <Route path="/goods" component={Goods}></Route>
               <Route path="/fenlei" component={Fenlei}></Route>
               <Route path="/history" component={History}></Route>
               <Route path="/search" component={Search}></Route>
               <Route path="/forget" component={Forget}></Route>
               <Route path="/searchgood" component={Searchgood}></Route>
               <Redirect from="/" to="/home" exact />
           </Switch>
       </div>
    };
}
App = withRouter(App);
export  default App;