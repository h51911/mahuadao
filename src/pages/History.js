import React, { Component } from "react";
import "../css/history.css"
import Axios from "axios";
import {Icon} from "antd";
import {connect} from "react-redux";
class History extends Component{
      constructor() {
          super();
          this.state = {
              cartlist: [],
              hotlist: [{
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
              }, {
                  "src": "https://img.manhuadao.cn/upload/kz/171221/171221hsdxhsxl.jpg",
                  "title": "何所冬暖何所夏凉",
                  "text": "天之骄子和自闭少女的纠缠"
              }, {
                  "src": "https://img.manhuadao.cn/upload/xbkz/180111/mtxqrzlarx.jpg",
                  "title": "蜜桃小情人之烈爱知夏",
                  "text": "一个包子的逆袭史！"
              }, {
                  "src": "https://img.manhuadao.cn/upload/BigBook201806/ydgf504300.jpg",
                  "title": "一代诡妃",
                  "text": "鬼修公主纳兰天月，以吸食男人的阳气作为修炼的手段。供奉她的顾家背叛了她，她在屠尽顾家满门后消亡，却附身在另一个大陆的废柴丞相之女身上。被退婚、被陷害、无法修炼……这些能难倒身为天之骄女的她？笑话，她终将修为大进，睥睨天下！“别在本宫脚下哭，脏了本宫屠城的路。”"
              }]
          }
      }
    // async componentDidMount(){
    //          Axios.get("http://localhost:1912/goods/goods3").then(res=>{
    //         console.log(res)
    //          let {data:list} = res;
    //          this.setState({
    //              cartlist:list.list
    //          })
    //     })
    // }
    clearcart = ()=>{
        let action = {
            type: "clear_cart",
        }
        this.props.dispatch(action);
    }
    removeitem =()=>{
        let action ={
            
        }
        this.props.dispatch(action);
    }
    render(){
          let {hotlist} = this.state;
        
          let {cartlist} = this.props;
          console.log(this.props);
        return <div>
            <header className="header-tabs">
                <div className="header-back"><Icon onClick={()=>{this.props.history.goBack()}}  style={{fontSize:35}} type="rollback" /></div>
                <div className="header-group">
                    <div className="header-title font-34 active">收藏</div>
                    <div className="header-title font-34">历史</div>
                </div>
            </header>
             <button><Icon onClick={this.clearcart} type="bank" /></button>
            <section className="comic-cue">               
                {
                    cartlist.map((item, index) => {
                       return <div  key={index} className="cue font-26">
                            <div className="cue-pic"><img src={item.src}/></div>
                            <p className="fav-text">{item.text}</p>
                        </div> 
                    })
                }               
            </section>
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
        </div>
    }
}
const mapStateToProps = function (state) {
    console.log(state)
    return {
        cartlist: state.cartReducer.cartlist
    }
}
History = connect(mapStateToProps)(History);
export default History;