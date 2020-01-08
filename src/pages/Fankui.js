import React,{Component} from "react";
import "../css/Fankui.css";

class Fankui extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Fankui"> 
                <header className="header-normal">
                    <div className="header-back"
                    onClick={()=>this.props.history.push("/mine")}
                    ></div>
                    <span className="header-title font-32">求书&amp;反馈</span>
                    <span className="header-submit">提交</span>
                </header>
                <section className="feedback-select">
                    <p className="select-title font-28">反馈类型：</p>
                    <div className="btn-group">
                        <div className="item">求漫画</div>
                        <div className="item">章节/内容问题</div>
                        <div className="item">加载慢/功能问题</div>
                        <div className="item">岛蛋/支付问题</div>
                        <div className="item">其他问题</div>
                        <div className="item"></div>
                    </div>
                </section>
                <section className="feedback-input">
                    <textarea className="input-main font-24" placeholder="请输入详细反馈内容，200字以内哦~喵~" maxlength="200"></textarea>
                    <span className="input-num font-24">0/200</span>
                    <input type="number" className="input-contact font-24" placeholder="QQ/手机至少填一项" />
                </section>
                <section className="feedback-follow">
                    <p className="follow-text font-26">官方Q群：239159587</p>
                    <p className="follow-text font-26">微信公众号：漫画岛（mhdapp）</p>
                    <div className="follow-group">
                        <div className="follow-2dcode" />
                        <p className="group-text font-22">截屏二维码，用微信扫一扫选择相册，扫描二维码完成关注</p>
                    </div>
                </section>
            </div>
        )
    }
}
export default Fankui;