import React, { Component } from "react";
import "../css/fenlei.css";
import Axios from "axios";
import Item from "antd/lib/list/Item";
import {withRouter} from "react-router-dom";
import {Icon} from "antd";
class Fenlei extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.goto =this.goto.bind(this);
    }
    async componentDidMount(){
        Axios.get("http://localhost:1912/goods").then(res=>{
            let {data:{list}} = res;
            this.setState({
                list
            })
        })
    }
    goto(id){
        this.props.history.push("/goods/"+id)
    }
    render(){
        let {list} = this.state;
        return <div>
            <header className="header-normal">
                <div className="header-back"><Icon onClick={()=>{this.props.history.goBack()}} type="scrollback"  style={{fontSize:20}}/></div>
                <span className="header-title font-32">分类</span>
                <div className="header-search"><Icon onClick={()=>{this.props.history.push("/home/")}}  style={{fontSize:20}} type="home" /></div>                
            </header>
            <div className="header-type">
            <div className="item active">热血</div><div className="item">恋爱</div><div className="item">搞笑</div><div className="item">魔幻</div><div className="item">悬疑</div><div className="item">少儿</div></div>
            <section className="classify-list">
                {
                    list.map((item,index)=>{
                        return <div className="list-item" key={index}>
                                    <div className="item-pic"  onClick={this.goto.bind(this,item.id)}>
                                        <img src ={item.src}/>
                                    </div>
                                    <div className="item-info">
                                        <p className="info-book font-30">{item.title}</p>
                                        <p className="info-author font-26">作者：杭州琪漫工作室</p>
                                        <p className="info-update font-26">{item.text}</p>
                                    </div>
                                </div>
                    })
                }
            </section>
        </div>
    }
}
Fenlei = withRouter(Fenlei);
export default Fenlei;