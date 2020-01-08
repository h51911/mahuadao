import React, { Component } from "react";
import { Mhd } from "../api";
import { Icon } from 'antd';
import "../css/goods.css";
import Axios from "axios";
class Goods extends Component {
    constructor(){
        super();
        this.state={
           data:[],
           hotlist:[
               {
                   "src": "https://img.manhuadao.cn/upload/kz/171221/171221hsdxhsxl.jpg",
                   "title": "何所冬暖何所夏凉",
                   "text": "天之骄子和自闭少女的纠缠"
               }, {
                   "src": "https://img.manhuadao.cn/upload/xbkz/180111/mtxqrzlarx.jpg",
                   "title": "蜜桃小情人之烈爱知夏",
                   "text": "一个包子的逆袭史！"
               }, {
                   "src": "https://img.manhuadao.cn/upload/BigBook201902/59481bdaf3894722ab8c0159c07a22d0.jpg",
                   "title": "我身上有条龙",
                   "text": "我为王者，何居人下？！"
               } ,{
                   "src": "https://img.manhuadao.cn/upload/kz/171221/171221hsdxhsxl.jpg",
                   "title": "何所冬暖何所夏凉",
                   "text": "天之骄子和自闭少女的纠缠"
               }, {
                   "src": "https://img.manhuadao.cn/upload/xbkz/180111/mtxqrzlarx.jpg",
                   "title": "蜜桃小情人之烈爱知夏",
                   "text": "一个包子的逆袭史！"
               }
               , {
                   "src": "https://img.manhuadao.cn/upload/BigBook201806/ydgf504300.jpg",
                   "title": "一代诡妃",
                   "text": "鬼修公主纳兰天月，以吸食男人的阳气作为修炼的手段。供奉她的顾家背叛了她，她在屠尽顾家满门后消亡，却附身在另一个大陆的废柴丞相之女身上。被退婚、被陷害、无法修炼……这些能难倒身为天之骄女的她？笑话，她终将修为大进，睥睨天下！“别在本宫脚下哭，脏了本宫屠城的路。”"
               }
           ]
        }
    }
    async componentDidMount(){
        let path = this.props.history.location.pathname;
        let index = path.lastIndexOf("/");
        let id = path.slice(index+1);
        Axios.get(`http://localhost:1912/goods/`+id).then(res=>{
             let {data} = res;
                this.setState({
                    data
                })
        })
    }
    render(){
        let {data,hotlist} = this.state;
        return <div className="goods">
            <header className="detail-header-scroll">
                <div className="header-back"> <Icon onClick={()=>{this.props.history.goBack()}}  style={{fontSize:35}} type="rollback" /></div>
                <span className="header-title font-32 header-hide">绝世剑神</span>
                <div className="header-index"><Icon onClick={()=>{this.props.history.push("/home/")}}  style={{fontSize:35}} type="home" /></div>
                <div className="header-share icon-share"><Icon style={{fontSize:35}}  type="share-alt"/></div>
            </header>
            <header className="detail-header">
                    <div className="header-cover">2</div>
                    <div className="header-group">
                        {
                            data.map((item,index)=>{
                                return (<div className="header-box" key={index}>
                            <div className="header-pic"><img src={item.src}/></div>
                        </div>)
                            })
                        }
                        <div className="header-info">
                            {
                                data.map((item,index)=>{
                                    return (
                                    <React.Fragment key={item.id}>
                                    <p key={item.id} className="info-title font-38">{item.title}</p>
                                    <p key={index} className = "info-type font-26" > {item.text} </p>
                                    </React.Fragment>
                                    )
                                })
                            }
                            <p className="info-type font-26">热血 | 修真 少年 热血 玄幻</p>
                            <div className="info-star">
                                <div className="star-red"></div><div className="star-red"></div><div className="star-red"></div><div className="star-red"></div>
                                <div className="star-white"></div>
                            </div>
                            <p className="info-fans font-26">人气：3.42亿</p> 
                        </div>               
                    </div>
                    <div className="vip fee">
                        <div></div>
                    </div>
            </header>
            <section className="detail-tab font-28">
                <div className="tab-item tab-border active">简介</div>
                <div className="tab-item tab-border">目录</div>
                <div className="tab-item">评论(123)
                </div>
            </section>
            {
                data.map((item,index)=>{
                   return(<section key={index} style={{fontSize:30}} className="detail-summary font-26">{item.text}</section>) 
                })
            }  
            <div className="introduce">
                <div className="btna"><span>作者：大衍五十</span></div>
                <div className="btnb"><span>连载中 |</span> <span>每周三、周日更新</span></div>
            </div> 
            <section className="hot-recommend">
                <p className="recommend-title font-26">热门推荐</p>
                <div className="recommend-list">
                    {
                        hotlist.map((item,index)=>{
                            return(
                                <div className="list-item" key={index}>
                                    <div className="item-pic"><img src={item.src}/></div>
                                    <p className="item-name font-26">{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <footer className="detail-footern">
                <div className="btn-fav">
                    <div className="icon-love"><Icon theme="twoTone" twoToneColor="#eb2f96" style={{marginRight:15}} type="heart" /></div>
                    <span className="btn-text font-28">加入收藏</span>
                </div>
                <div className="btn-readn">
                    <div className="icon-book"><Icon style={{marginRight:15}} type="read" /></div>
                    <span className="btn-text font-28">开始阅读</span>
                </div>
            </footer>
        </div>
    }
}
export default Goods;