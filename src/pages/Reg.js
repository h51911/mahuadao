import React,{Component} from "react";
import { Form, Row, Input, Button,  message } from 'antd';
import Axios from "axios";
import "../css/Reg.css";

class Reg extends Component {
    constructor(props) {
        super(props) 
        
       this.randmath = this.randmath.bind(this);   
    }
        
    randmath () {
        let str = "";
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < 9; i++) {
          let num = parseInt(Math.random() * arr.length);
          str += arr[num];
        }
        return  str;
      }
    handleSubmit = e => {
            e.preventDefault();
            console.log(this.props.form)
            this.props.form.validateFields(async (err, values) => {
                let { eamil, password } = values;
                console.log(values);
                if (!eamil) {
                    this.error("请输入邮箱！")
                    return;
                }
                if (!password) {
                    this.error("请输入密码！");
                    return;
                }
                if (!err) {
                  
                    let  {data}  = await Axios.post('http://localhost:1912/user/login', {
                        eamil: eamil,
                        pwd: password
                    })
    
                    if(data.code){//登录时，执行这个分支

                        if(window.localStorage.setItem("login",eamil)){//如果已经登录执行这分支
                          this.error("你已经登录了！");
                          this.props.history.push('/home')

                        }else{//没登录时，执行这个分支
                        

                            window.localStorage.setItem("login",eamil);
                            window.localStorage.setItem("num",this.randmath());
                            // history.back();
                            this.props.history.push('/my')
                        }
                    }
                }
            });
    }
        //提示
        error = (str) => {
            message.config({
                top: 300,
                duration: 4,
                maxCount: 6,
            });
            message.error(str);
        }
        handleConfirmBlur = e => {
            const { value } = e.target;
        }


    render() {
        const { getFieldDecorator } = this.props.form;
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
               <Form onSubmit={this.handleSubmit} className="login-main">
                  <div className="input-group className-24">
                     <label>邮 箱：</label>
                     <Form.Item >
                        {getFieldDecorator('eamil', {
                            rules: [{ required: true, pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}],
                        })(
                            <Input
                                placeholder="请输入您的邮箱"
                                onBlur={this.handleConfirmBlur}
                            />,
                        )}
                    </Form.Item>
                     {/* <input type="text" placeholder="请输入您的邮箱"/> */}
                  </div>
                  <div className="input-group className-24 password">
                      <label>密 码：</label>
                      <Form.Item >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, min: 6, max: 16 }],
                            })(
                                <Input
                                    type="password"
                                    placeholder="请输入您的密码"
                                />,
                            )}
                        </Form.Item>      
                      {/* <input type="password" placeholder="请输入您的密码"/> */}
                      <span className="forget className-20"
                      onClick={()=>this.props.history.push("/forget")}
                      >忘记密码?</span>
                  </div>
                  <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-btn">
                        登录
                        </Button>
                  </Form.Item>
                  {/* <div className="login-btn"
                  onClick={()=>this.props.history.push("/reg")}
                  >登录</div> */}
               </Form>
               <footer className="login-third">
                    <p className="third-title ">或者用以下方式登录</p>
                    <div className="third-group">
                        <div className="login-qq"></div>
                        <div className="login-weibo"></div>
                    </div>
              </footer>
            </div>
            
        )
    }
}
// export default Reg;
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Reg);
// export default WrappedNormalLoginForm;
export default Form.create({ name: 'normal_login' })(Reg);