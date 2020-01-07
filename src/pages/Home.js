import React, { Component } from 'react';
import {Mhd} from "../api";
import { Icon,Carousel} from 'antd';
import "../css/home.css";
import { Icon,Carousel,Row, Col}  from 'antd';
import "../css/home.css";
import {Router, Switch} from "react-router-dom";

class Home extends Component{
    constructor(){
        super();
        this.state ={
        }
    }
    render(){
        return <div>
            
        </div>
    }
    async componentDidMount(){
        let {info} = await Mhd.get({
            apptype : 8 ,
            appversion :1.0 ,
            viewtype : 1,
        })
        console.log(info)
    }
    render(){
        return <div className = "home">
            <div className="header">      
                    <p><Icon type="user" /></p>
                    <p><Icon type="user" onClick={this.changeMenu}/></p>
                    <p>漫画岛</p>
                    <p><Icon type="search" /></p> 
            </div>
            <div className="main">
                <div>
                <div className="banner">
                     <Carousel autoplay>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201810/cjjpx720360.jpg"/>
                        </div>
                        <div>
                            <img alt="" src = "//img.manhuadao.cn/upload/AdGroup201901/eb16282222e144baa08b998b19998df7.jpg" />
                        </div>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201808/wjzccrf720360.jpg"/>
                        </div>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201901/6518e794624f4712a63bdd79650c2c07.jpg"/>
                        </div>
                         <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201810/cjjpx720360.jpg"/>
                        </div>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201901/eb16282222e144baa08b998b19998df7.jpg"/>
                        </div>
                    </Carousel>
                </div>
                <div className="nav">

                </div>
            </div>
            <div className="footer"></div>
        </div>
    }
}
export default Home;
