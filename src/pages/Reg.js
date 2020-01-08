import React,{Component} from "react";
import {Row} from "antd";
import "../css/Reg.css";

class Reg extends Component {
    constructor(props) {
        super(props) 
    }
    render() {
      
        return(
            <div className="reg">

               <Row className="header-photo">
                 <div className="icon-back"
                 onClick={()=>this.props.history.push("/mine")}
                 ></div>
                 <div className="icon-reg"
                 onClick={()=>this.props.history.push("/login")}
                 >注册</div>
                 <div className="header-pic3"></div>
               </Row>
               <section className="login-main">
                  <div className="input-group className-24">
                     <label>邮 箱：</label>
                     <input type="text" placeholder="请输入您的邮箱"/>
                  </div>
                  <div className="input-group className-24 password">
                      <label>密 码：</label>
                      <input type="password" placeholder="请输入您的密码"/>
                      <span className="forget className-20"
                      onClick={()=>this.props.history.push("/forget")}
                      >忘记密码?</span>
                  </div>
                  <div className="login-btn"
                  onClick={()=>this.props.history.push("/reg")}
                  >登录</div>
               </section>
               <footer className="login-third">
                    <p className="third-title font-20">或者用以下方式登录</p>
                    <div className="third-group">
                        <div className="login-qq"></div>
                        <div className="login-weibo"></div>
                    </div>
              </footer>
            </div>
            
        )
    }
}
export default Reg;