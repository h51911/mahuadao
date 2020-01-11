import React, { Component } from 'react';
import {Col,Row} from "antd";
import "../css/My.css"

class My extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        console.log(this.props);
        return (
            <div className="my">
              <Row className="header-normal">
                  <Col span={18} push={6} className="header-back">
                    
                  </Col>
                  <Col span={6} pull={18} className="header-title">
                      我的
                  </Col>
              </Row>
              <section className="mine-info">
                    <div className="info-pic" >
        
                    </div>
                    <div className="info-user">
                        <p className="user-name font-28">啊哈</p>
                        {/* <p className="user-id font-20">ID：204743815</p> */}
                        <p className="user-id font-20">ID：{ window.localStorage.getItem("num")}</p>
                        <p className="user-pay font-24">余额：
                            <span className="icon-daodan"></span>
                            <span className="num-red">0</span>岛蛋
                            <span className="icon-ticket"></span>
                            <span className="num-red">0</span>漫画券
                        </p>
                    </div>
              </section>
              <section className="mine-menu">
                    <a className="menu-item" href="account.html?cpid=0">
                        <span className="icon-wallet"></span>
                        <span className="item-text">我的账户</span>
                        
                    </a>
                    <a className="menu-item" href="mine-exchange.html?cpid=0">
                        <span className="icon-wallet"></span>
                        <span className="item-text">使用兑换码</span>
                    </a>
                    <a className="menu-item">
                        <span className="icon-fav"></span>
                        <span className="item-text">收藏</span>
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
              <footer className="mine-logout3 "
              onClick={()=>this.props.history.push("/mine")}
              
              >退出登录</footer>
         </div>
      )
    }
}
export default My;