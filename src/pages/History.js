import React, { Component } from "react";
import "../css/history.css"
class History extends Component{
    render(){
        return <div>
            <header className="header-tabs">
                <div className="header-back">pic</div>
                <div className="header-group">
                    <div className="header-title font-34 active">收藏</div>
                    <div className="header-title font-34">历史</div>
                </div>
            </header>
            <section className="comic-cue">               
                <div className="cue font-26">
                    <div className="cue-pic"></div>
                    <p className="fav-text">还没有收藏任何一本书哦</p>
                </div>                
            </section>
            <section className="hot-good">
                <p className="hot-title">热门推荐</p>
                <div className="hot-list">
                    <div className="hotlist-item">
                        <div className="item-pic" ></div>
                        <p className="item-name font-26">总裁老公爱不够</p>
                    </div>
                </div>
            </section>
        </div>
    }
}
export default History;