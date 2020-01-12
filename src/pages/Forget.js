import React,{Component} from "react";
import "../css/Forget.css";

class Forget extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="forget">
                <header className="forget-header">
                    <div className="header-back"
                     onClick={()=>this.props.history.push("/reg")}
                    ></div>
                    <div className="header-pic"></div>
                </header>
                <section className="forget-contact ">忘记密码？请联系客服QQ：2542738114</section>
            </div>
        )
    }
}

export default Forget;