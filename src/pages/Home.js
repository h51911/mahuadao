import React, { Component } from 'react';
import {Mhd} from "../api";
import { Icon,Carousel,Row, Col}  from 'antd';
import "../css/home.css";
// import Background from "../img/login.png";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state ={
            info:[],
              menu: [{
                      name: "fenlei",
                      path: "/fenlei",
                      text: "分类",
                      icon: "dropbox"
                  },
                  {
                      name: "paihang",
                      path: "/paihang",
                      text: "排行",
                      icon: "gift"
                  },
                  {
                      name: "vip",
                      path: "/vip",
                      text: "VIP专区",
                      icon: "snippets"
                  },
                  {
                      name: "history",
                      path: "/history",
                      text: "历史",
                      icon: "bg-colors"
                  }
              ]
        }
        this.goto = this.goto.bind(this);
        this.gotogoods = this.gotogoods.bind(this);
    }
    async componentDidMount(){
        let {info} = await Mhd.get({
            apptype : 8 ,
            appversion :1.0 ,
            viewtype : 1,
        })
        this.setState({
            info
        })
    }
    goto(path){
        console.log(path);
        this.props.history.push(path);
     }
     gotogoods(id){
        console.log(id);
        this.props.history.push("/goods/"+id);
     }
    render(){
        let {info,menu} = this.state;
        console.log(info);
        return <div className = "home">
            <div className="header">      
                    <p><Icon type="user" /></p>
                    <p className="logo">漫画岛</p>
                    <p onClick={()=>this.props.history.push("/search")}><Icon type="search" /></p> 
            </div>
            <div className="main">
                <div className="banner">
                     <Carousel autoplay>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201810/cjjpx720360.jpg"/>
                        </div>
                        <div>
                            <img alt="" src = "//img.manhuadao.cn/upload/AdGroup201901/eb16282222e144baa08b998b19998df7.jpg" />
                        </div>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201808/wjzccrf720360.jpg"/>
                        </div>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201901/6518e794624f4712a63bdd79650c2c07.jpg"/>
                        </div>
                         <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201810/cjjpx720360.jpg"/>
                        </div>
                        <div>
                            <img alt="" src = "http://img.manhuadao.cn/upload/AdGroup201901/eb16282222e144baa08b998b19998df7.jpg"/>
                        </div>
                    </Carousel>
                </div>
                <div className="nav">
                <div>
            <nav className="index-nav">
                {
                    menu.map(item=>{
                        return <a key={item.path}>
                            <div className="nav-item" onClick={this.goto.bind(this,item.path)}>
                                <div className="nav-pic pic-1"><Icon type={item.icon} /></div>
                                <p className="nav-text font-24">{item.text}</p>
                            </div>
                        </a>
                    })
                }
            </nav>
            </div>
                </div>
                <div className="items">                     
                        {
                            info.map((item,index)=>{
                                return <section key={index} className="index-recommend">
                                            <div className="recommend-divide"></div>
                                            <div className="recommend-title">
                                                <div className="title-group">
                                                    <img src={item.icon} className="title-icon"/>
                                                    <span className="title-text font-36">{item.name}</span>
                                                </div>
                                                <span className="title-more font-24">更多comicslist &gt;</span>
                                            </div>
                                            <Row>
                                                {
                                                    item.comicslist.map((item,index)=>{
                                                       return <Col
                                                       span={12}
                                                       key={index}
                                                       >
                                                        {
                                                            <div key={item.bigbook_id} className="recommend-type-1">
                                                                <div className="item">
                                                                    <img src={item.coverurl} className="item-pic"/>
                                                                    <p className="item-name font-28">绝世剑神</p>
                                                                    <p className="item-text font-24">凌九霄破万劫，终成一代绝世剑神！</p>
                                                                </div>
                                                            </div> 
                                                        }
                                                        </Col>
                                                    })
                                                }
                                            </Row>
                                        </section>   
                            })
                        }              
                </div>
            </div>
            <div className="footer"></div>
        </div>
    }
}

export default Home;
