import React, { Component } from 'react';
import {Col,Row} from "antd";
import "../css/Login.css"

class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="login">
              <Row className="header-normal">
                  <Col span={18} push={6} className="header-back">
                    
                  </Col>
                  <Col span={6} pull={18} className="header-title">
                      我的
                  </Col>
              </Row>
              <section className="mine-login">
                 <div className="login-pic"></div>
                 <p className="login-btn font-30">登录/注册</p>
              </section>
              <section className="mine-menu">
                    <a className="menu-item" href="favorite.html?cpid=0">
                        <span className="icon-fav"></span>
                        <span className="item-text">收藏</span>
                    </a>
                    <a className="menu-item" href="history.html?cpid=0">
                        <span className="icon-clock"></span>
                        <span className="item-text">历史</span>
                    </a>
                    <a className="menu-item" href="about.html?cpid=0">
                        <span className="icon-mhd"></span>
                        <span className="item-text">关于漫画岛</span>
                    </a>
                    <a className="menu-item" href="feedback.html?cpid=0">
                        <span className="icon-pencil"></span>
                        <span className="item-text">反馈</span>
                    </a>
              </section>
         </div>
      )
    }
}
export default Login;