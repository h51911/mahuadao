import React,{Component} from "react";
// import {Row} from "antd";
import { Form, Input, Button, Checkbox, message,Row } from 'antd';
import "../css/Login.css";
import Axios from "axios";

class Login extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     value:''
        // }
    }
    // additem(){

    //     this.props.addItem(this.state.value);

    //     // 清空并自动获得焦点
    //     this.setState({
    //         value:''
    //     });

    //     // 节点操作
    //     this.value.focus();

    //     // this.title.current.focus();
    // }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(this.props.form)
    //     this.props.form.validateFields(async (err, values) => {
    //         let { username, password } = values;
    //         console.log(values);
    //         if (!username) {
    //             this.error("请输入邮箱！")
    //             return;
    //         }
    //         if (!password) {
    //             this.error("请输入密码！");
    //             return;
    //         }
    //         if (!err) {
    //             // console.log('Received values of form: ', values);
    //             // console.log("正确");
              
    //             let  {data}  = await Axios.post('http://localhost:1912/user/getUser', {
    //                 user: username,
    //                 pwd: password
    //             })

    //             if(data.code){
    //                 if(window.localStorage.setItem("user",username)){//如果已经登录执行这分支
    //                   this.error("你已经登录了！");
    //                   this.props.history.push('/home')
    //                 }else{//没登录时，执行这个分支

    //                     window.localStorage.setItem("user",username);
    //                     // history.back();
    //                     this.props.history.push('/personal')
    //                 }
    //             }
    //         }
    //     });
    // }
    // //提示
    // error = (str) => {
    //     message.config({
    //         top: 250,
    //         duration: 2,
    //         maxCount: 3,
    //     });
    //     message.error(str);
    // }
    // handleConfirmBlur = e => {
    //     const { value } = e.target;
    //     console.log(value);
    //     let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    //     // if(!reg.test(value)){
    //     //     red
    //     // }{
    //     //     black
    //     // }
    // }
    error = (str) => {
        message.config({
            top: 250,
            duration: 2,
            maxCount: 3,
        })
        message.error(str);
    };
    success=(str)=>{
        message.config({
            duration: 3
        })
        message.success(str);
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.props.form)
        this.props.form.validateFields(async (err, values) => {
            let { eamil,  password } = values;
            // console.log(values);
            if (!eamil) {
                this.error("请输入邮箱！")
                return;
            }
            // if (!photo) {
            //     this.error("请输入图形验证码！");
            //     return;
            // }
            // if (!msgs) {
            //     this.error("请输入短信验证码！");
            //     return;
            // }
            if (!password) {
                this.error("请输入密码！");
                return;
            }

            if (!err) {
                // console.log('Received values of form: ', values);
                // console.log("正确");
                // console.log('登录成功！')
                let { data } = await Axios.post('http://localhost:1912/user/reg',
                    {
                        eamil: eamil,
                        pwd:password,
                        condition:'reg'
                    })
                    console.log(data);
                    if(data.code){//0
                        message.success('注册成功！');
                        this.success('注册成功！')
                        // this.props.history.push('/userLogin')
                        this.props.history.push('/reg')
                    }else{//1
                        this.error("注册失败！");
                    }


            } else {
                console.log("登录失败");
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form
        return(
            <div className="login">
               <Row className="header-photo">
                 <div className="icon-back"
                  onClick={()=>this.props.history.push("/reg")}
                 ></div>
                 <div className="header-pic3"></div>
               </Row>
               <Form onSubmit={this.handleSubmit} className="register-main" >
                    <div className="input-group ">
                        <label >邮<span className="hide">邮箱</span>箱：</label>
                        <Form.Item >
                        {getFieldDecorator('eamil', {
                            rules: [{ required: true, pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}],
                        })(
                            <Input
                                placeholder="请输入你的邮箱"
                                onBlur={this.handleConfirmBlur}
                                // ref={(ele)=> this.value=ele}
                                // value={this.state.value} 
                                // onClick={this.additem}
                            />,
                        )}
                    </Form.Item>
                        {/* <input type="text" placeholder="请输入你的邮箱"
                        className="email"
                        // onBlur={this.onblur()}
                        /> */}
                    </div>
                    <div className="input-group password">
                        <label>密<span className="hide">密码</span>码：</label>
                        <Form.Item >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, pattern:/^[a-zA-Z]\w{5,15}$/ }],
                        })(                         
                            <Input
                                type="password"
                                placeholder="请设置6-16位的字母、数字、下划线的密码"
                            />,
                        )}
                    </Form.Item>
                        {/* <input type="password" placeholder="请设置6-16位的字母、数字、符号的密码"/> */}
                    </div>
                    <div className="input-group password">
                        <label>确认密码：</label>
                        <Form.Item >
                        {getFieldDecorator('password2', {
                            rules: [{ required: true,pattern:/^[a-zA-Z]\w{5,15}$/  }],
                        })(
                            <Input
                                type="password"
                                placeholder="请再次输入你的密码"
                            />,
                        )}
                    </Form.Item>
                        {/* <input type="password" placeholder="请再次输入你的密码"/> */}
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="register-btn">
                        注册
                        </Button>
                    </Form.Item>
                    {/* <div className="register-btn"
                    //  onClick={()=>this.props.history.push("/reg")}
                    >注册</div> */}
                </Form>
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


// export default Login
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
// export default WrappedNormalLoginForm;
export default Form.create({ name: 'normal_login' })(Login);