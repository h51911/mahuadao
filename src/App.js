import React,{Component} from 'react';
import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import {menu} from "antd";
import "antd/dist/antd.css";

import Mine from "./pages/Mine";
import My from "./pages/My";
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import Fankui from "./pages/Fankui";
import About from "./pages/About";
import Forget from "./pages/Forget";
import hover from "./Backstage/hover";

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
      }
  }
  render (){
     return <div>
         <Switch>
             <Route path="/mine" component={Mine}></Route>
             <Route path="/my" component={My}></Route>
             <Route path="/login" component={Login}></Route>
             <Route path="/reg" component={Reg}></Route>
             <Route path="/fankui" component={Fankui}></Route>
             <Route path="/about" component={About}></Route>
             <Route path="/forget" component={Forget}></Route>
             <Route path="/hover" component={hover}></Route>
             <Redirect from="/" to="/mine" exact />
         </Switch>
     </div>
  };
}
App = withRouter(App);
export  default App;
