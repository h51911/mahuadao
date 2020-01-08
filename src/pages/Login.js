import React,{Component} from "react";
import {Row} from "antd";
import "../css/Login.css";

class Login extends Component {
    constructor(props){
        super(props)
    }

    // onblur() {
    //     // Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
    //     let val = email.value.trim();
    //     let res = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    //     if(val) {
            
    //     }
    // }

    render(){

        return(
            <div className="login">
               <Row className="header-photo">
                 <div className="icon-back"
                  onClick={()=>this.props.history.push("/reg")}
                 ></div>
                 <div className="header-pic3"></div>
               </Row>
               <section className="register-main">
                    <p className="input-group ">
                        <label>邮<span className="hide">邮箱</span>箱：</label>
                        <input type="text" placeholder="请输入你的邮箱"
                        className="email"
                        // onBlur={this.onblur()}
                        />
                    </p>
                    <p className="input-group password">
                        <label>密<span className="hide">密码</span>码：</label>
                        <input type="password" placeholder="请设置6-16位的字母、数字、符号的密码"/>
                    </p>
                    <p className="input-group password">
                        <label>确认密码：</label>
                        <input type="password" placeholder="请再次输入你的密码"/>
                    </p>
                    <div className="register-btn">注册</div>
                </section>
                <footer className="register-footer">
                    <p className="content ">已有账号？马上
                    <span className="go-login"
                    onClick={()=>this.props.history.push("/reg")}
                    >登录</span>
                    </p>
                </footer>
            </div>
        )
    }

    // 密码(以字母开头，长度在6~16之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,15}$
    // Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$

}


export default Login