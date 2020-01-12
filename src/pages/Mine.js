import React, { Component } from 'react';
import {Col,Row} from "antd";
import "../css/Mine.css"

class Mine extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return (
            <div className="mine">
              <Row className="header-normal">
                  <Col span={18} push={6} className="header-back" onClick={()=>this.props.history.push("/home")}>
                    
                  </Col>
                  <Col span={6} pull={18} className="header-title">
                      我的
                  </Col>
              </Row>
              <section className="mine-login">
                 <div className="login-pic" 
                
                 ></div>
                 <p className="login-btn2"
                 onClick={()=>this.props.history.push("/reg")}
                 >登录/注册</p>
              </section>
              <section className="mine-menu">
                    <a className="menu-item">
                        <span className="icon-fav"></span>
                        <span className="item-text" onClick={()=>this.props.history.push("/history")}>收藏</span>
                    </a>
                    <a className="menu-item">
                        <span className="icon-clock"></span>
                        <span className="item-text">历史</span>
                    </a>
                    <a className="menu-item">
                        <span className="icon-mhd"></span>
                        <span className="item-text"
                        onClick={()=>this.props.history.push("/about")}
                        >关于漫画岛</span>
                    </a>
                    <a className="menu-item" >
                        <span className="icon-pencil"></span>
                        <span className="item-text"
                         onClick={()=>this.props.history.push("/fankui")}
                        >反馈</span>
                    </a>
              </section>
              {/* <footer className="mine-logout3 
                
              ">退出登录</footer> */}
         </div>
      )
    }
}
export default Mine;