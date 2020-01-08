import React,{Component} from "react";
import "../css/About.css";

class About extends Component {
    constructor(props){
        super(props)
    }
    render(){ 
        return(
            <div className="About">
                <header className="header-normal">
                    <div className="header-back"
                    onClick={()=>this.props.history.push("/mine")}
                    ></div>
                    <span className="header-title ">关于漫画岛</span>
                </header>
                <section className="about-download">
                    <div className="download-pic"></div>
                    <a href="###">
                        <div className="download-btn">立即下载</div>
                    </a>
                </section>
                <section className="about-info">
                    <p className="info-item">
                        <span className="item-left ">公司名称</span>
                        <span className="item-right ">上海元聚网络科技有限公司</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">微博</span>
                        <span className="item-right ">@漫画岛官网</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">微信</span>
                        <span className="item-right ">mhdapp</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">官方Q群</span>
                        <span className="item-right ">555142226</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">联系电话</span>
                        <span className="item-right ">021-54393188</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">商务合作QQ</span>
                        <span className="item-right ">317022157</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">版权合作邮箱</span>
                        <span className="item-right ">tg@manhuadao.cn</span>
                    </p>
                    <p className="info-item">
                        <span className="item-left ">公司地址</span>
                        <span className="item-right ">上海市闵行区万源路2158号泓毅大厦B座</span>
                    </p>
                    <section className="about-download">
                        <div className="download-pic"></div>
                        <a href="download.html?cpid=0">
                            <div className="download-btn ">立即下载</div>
                        </a>
                    </section>
                </section>
                <footer className="about-summary">
                    <p className="summary-title ">漫画岛简介</p>
                    <p className="summary-text ">
                        上万部各类题材漫画实时连载，各国免费漫画资源全方位覆盖，漫画更新速度紧随官网脚步，绝对让你先睹为快！专为下载阅读研发的极速下载功能和新型压缩技术，在观看高清漫画的同时更有效地为你节省手机空间让你观漫无止境。漫画岛，致力为沉迷二次元漫画的你带来丰富的精神食粮！畅心阅读，一点都不卡。
                    </p>
                </footer>
            </div>
        )
    }
}
export default About;