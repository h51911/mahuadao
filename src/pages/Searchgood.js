import React, { Component } from "react";
import {Icon} from "antd";
import Axios from "axios";
class  Searchgood extends Component {
    constructor(){
        super();
        this.state={
            info:[]
        }
    }
    componentDidMount(){
        let keywords = this.props.history.location.pathname;
        let index = keywords.lastIndexOf("/");
        console.log(index)
        let keyword = keywords.slice(index+1)
        Axios.get("https://mhd.zhuishushenqi.com/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&name=%E6%80%BB%E8%A3%81%E5%9C%A8%E4%B8%8A&type=2&pageno=1&pagesize=100").then(res=>{
            let {data:{info}} = res;
            this.setState({
                info
            })
        })
    }
    render(){
        let {info} = this.state;
        return <div>
            <header className="header-normal">
                <div className="header-back"><Icon onClick={()=>{this.props.history.goBack()}}  style={{fontSize:35}} type="rollback" /></div>
                <span className="header-title font-32">他是龙傲天</span>              
            </header>
            <section className="search-result-list">
                {
                    info.map((item,index)=>{
                        return(
                            <div key={index} className="list-item">
                                <div className="item-pic">
                                    <img src = {item.coverurl}/>
                                </div>
                                <div className="item-info">
                                    <p className="info-book font-30">{item.name}</p>
                                    <p className="info-author font-26">{item.author}</p>
                                    <p className="info-update font-26">更新：{item.lastpartname}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    }
}
export default Searchgood;