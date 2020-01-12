import React, { Component } from "react";
import "../css/search.css";
import {Icon} from "antd";
import Axios from "axios";
import Api from "../api";
class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            hotWordsList:[]
        }
    }
    componentDidMount(){
        Axios.get("https://mhd.zhuishushenqi.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8").then(res => {
            let {data:{info:{hotWordsList}}} = res;
            this.setState({
                hotWordsList
            })
        })
    }
    render(){
        let {hotWordsList} = this.state;
       return <div>
             <header className="search-header">
                <div className="header-back"><Icon onClick={()=>{this.props.history.goBack()}}  style={{fontSize:20,marginTop:10}} type="rollback" /></div>
                    <div className="header-search">
                        <span className="icon-search"></span>
                        <input className="search-input font-24"  placeholder="漫画名丨作者 ^_^"/>
                    </div>
                <div className="header-btn font-30">搜索</div>
            </header>
            <section className="search-recommend">
                <div className="recommend-title font-26">
                    <span className="title-title">大家都在搜</span>
                    <span className="title-btn"><span className="icon-refresh"></span>刷新</span>
                </div>
                <div className="recommend-content font-28">
                    {
                        hotWordsList.map((item,index)=>{
                            return (
                            <span key={index}
                             className="recommend-item"
                             onClick = {
                                 () => {
                                     this.props.history.push("/searchgood/"+item.keyword)
                                 }
                             }
                             >{item.keyword}</span>
                            )
                        })
                    }
                </div>
            </section>
            <section className="search-history">
                <div className="history-title">
                    <span className="title-title font-24">最近搜索</span>
                    <div className="title-del"></div>
                </div>
                <div className="history-item">
                    <div className="icon-time"><Icon type="clock-circle" /></div>
                    <span className="item-text font-28">他是龙傲天</span>
                </div><div className="history-item">
                    <div className="icon-time"><Icon type="clock-circle" /></div>
                    <span className="item-text font-28">王爷你好贱</span>
                </div>
            </section>
        </div>
    }
}
export default Search;