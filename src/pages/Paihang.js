import React, { Component } from "react";
import "../css/paihang.css";
import { Tabs,Icon } from 'antd';
const { TabPane } = Tabs;

class Paihang extends Component{
    constructor(){
        super();
        this.state={
            data :[
                   { title:"热搜榜",
                    arr: [{
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/246985/2222015_ebe04b0fe0c04bdf8437df92417163c7.jpg",
                        "book": "校花的贴身高手",
                        "author": "作者：大角虫,笑水轩",
                        "fans": "人气：5.01万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247933/2443200_055de269532a4a8a9a39bf511b927209.jpg",
                        "book": "绝品小神医",
                        "author": "作者：仟绘动漫工作室",
                        "fans": "人气：2.88万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177507/177507_64ab234dd89342fdbdb591aeee63bec4.jpg",
                        "book": "剃头匠",
                        "author": "作者：云栖动漫",
                        "fans": "人气：14.80万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249098/3321576_82febf14e057468c8382c2fbabb8ab5e.jpg",
                        "book": "孤的王妃是盟主",
                        "author": "作者：有瑟书组",
                        "fans": "人气：6.43万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249056/3313441_63a6eb8ba7a54ab2a8d6fca991944611.jpg",
                        "book": "美味甜妻要爬墙",
                        "author": "作者：书丛漫画",
                        "fans": "人气：4568"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247057/2225868_b5c60d27274348a98e916eef7d2ce966.jpg",
                        "book": "全职法师",
                        "author": "作者：阅文漫画",
                        "fans": "人气：87.73万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/168407/168407_749f2be713ea464193b3b4d8e314e00a.jpg",
                        "book": "斗罗大陆",
                        "author": "作者：风炫动漫 穆逢春",
                        "fans": "人气：129.05万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/181525/181525_204005121c6449f4a2cf62645f6924e7.jpg",
                        "book": "桃花宝典",
                        "author": "作者：有鹿文化，河取",
                        "fans": "人气：53.41万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247050/2225787_b75c7142b03e445898b3079c73859fce.png",
                        "book": "斗战狂潮",
                        "author": "作者：阅文漫画",
                        "fans": "人气：41.84万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247855/2342747_6822b3e783bf41d485e214b276c85f0c.jpg",
                        "book": "绝代娇宠俏毒妃",
                        "author": "作者：云栖动漫",
                        "fans": "人气：9608"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247913/2422028_5c0e681710974cb18ab7f274cc063c8d.jpg",
                        "book": "一代诡妃",
                        "author": "作者：红鲤鱼工作室",
                        "fans": "人气：20.50万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/248388/2600223_0b044ab3d0ce4fab8721abad72979da9.jpg",
                        "book": "冰箱是个传送门",
                        "author": "作者：岚·翼动漫工作室",
                        "fans": "人气：1.00万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/246843/2209311_b35a70336dc744f7a41602b6dcb4baf0.jpg",
                        "book": "校园高手",
                        "author": "作者：比格熊",
                        "fans": "人气：8.42万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249060/3313446_45d4ff54a29a4f838564be4cee51a663.jpg",
                        "book": "浴血商后",
                        "author": "作者：豆腐漫画",
                        "fans": "人气：1.75万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247591/2271583_a88cd74ffaf54ee48af98d4d87074407.jpg",
                        "book": "金牌甜妻",
                        "author": "作者：博易动漫",
                        "fans": "人气：21.77万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/194790/194790_50a35d3fa562417cbd6e2d934bdc3364.jpg",
                        "book": "很纯很暧昧",
                        "author": "作者：三福动漫",
                        "fans": "人气：25.41万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247741/2284741_a5c1406da9174f69bf6e52f998e01acc.jpg",
                        "book": "我的微信连三界",
                        "author": "作者：iCiyuan动漫",
                        "fans": "人气：38.87万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247948/2502413_fbe44041677840918aaf7f65498952f5.jpg",
                        "book": "顾少的超模新妻",
                        "author": "作者：仟绘动漫工作室",
                        "fans": "人气：5600"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/198308/198308_ec281e85f985419ab41ecbc77a61fe53.jpg",
                        "book": "据说我是王的女儿",
                        "author": "作者：Kim Rek-na;Bi Chu",
                        "fans": "人气：18.82万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/180377/180377_5f2fbf29d81a479c8ac53897259bdb22.jpg",
                        "book": "豪门天价前妻",
                        "author": "作者：闲林",
                        "fans": "人气：15.14万"
                    }]
                },
                {
                     title: "人气榜",
                    arr: [{
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/168407/168407_749f2be713ea464193b3b4d8e314e00a.jpg",
                        "book": "斗罗大陆",
                        "author": "作者：风炫动漫 穆逢春",
                        "fans": "人气：129.05万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247057/2225868_b5c60d27274348a98e916eef7d2ce966.jpg",
                        "book": "全职法师",
                        "author": "作者：阅文漫画",
                        "fans": "人气：87.73万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/245826/2187880_4f0498cda9614f68b7d37d0882997d89.jpg",
                        "book": "元尊",
                        "author": "作者：天蚕土豆,Dr.大吉",
                        "fans": "人气：86.85万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249957/3415788_63558a0c7a024db385092b409b08954d.jpg",
                        "book": "逆天神龙系统",
                        "author": "作者：红鲤鱼工作室",
                        "fans": "人气：82.74万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249931/3399770_533143ab95e6416c9c1e6f359952375c.png",
                        "book": "拐个妈咪带回家",
                        "author": "作者：十二章纹",
                        "fans": "人气：82.46万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/181576/181576_db9f64dc8f2e4080a202f46f986cdbad.jpg",
                        "book": "妖神记",
                        "author": "作者：踏雪动漫",
                        "fans": "人气：80.85万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249347/3353215_18377bd758664b6482cd477a259d3d0a.jpg",
                        "book": "我身上有条龙",
                        "author": "作者：噼咔噼",
                        "fans": "人气：74.18万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249672/3389293_2404e102203e40fd8183fbc87a040d44.jpg",
                        "book": "重生八万年",
                        "author": "作者：掌阅",
                        "fans": "人气：74.01万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249960/3415791_741bbbdbbe0d4bfe8a04fbcd4a3e42c3.jpg",
                        "book": "逆袭天后系统",
                        "author": "作者：尘鱼漫画工作室",
                        "fans": "人气：68.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249630/3387148_0176148bda6a4ebcb1f8ee30108defc1.jpg",
                        "book": "女帝的后宫",
                        "author": "作者：拂晓联盟",
                        "fans": "人气：64.83万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249340/3348311_6560b2cecf664793a01b5d38b44e3ad4.jpg",
                        "book": "最强枭雄系统",
                        "author": "作者：掌阅漫画",
                        "fans": "人气：63.08万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249959/3415790_d697474e137c45c8bb49dc464545fa25.jpg",
                        "book": "重生之魔尊当道",
                        "author": "作者：初新动漫",
                        "fans": "人气：61.15万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249602/3384656_42f91c2a11c44e9b8c8008fb44484d89.jpg",
                        "book": "重生之都市修仙",
                        "author": "作者：杭漫文化",
                        "fans": "人气：58.94万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249662/3388558_411404c26cae46518fc965cc054aefd1.jpg",
                        "book": "末世恋爱法则",
                        "author": "作者：虎岫工作室",
                        "fans": "人气：58.87万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249209/3343120_416338917bf8433ab00e3dc69d52ae89.jpg",
                        "book": "萌师在上",
                        "author": "作者：大魔王漫画",
                        "fans": "人气：58.22万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249961/3415792_05831c823842441998266a42a518c5aa.jpg",
                        "book": "万古天帝",
                        "author": "作者：博易动漫",
                        "fans": "人气：54.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249947/3413422_cf29a17a0e7b48fc9fd5577d015fdff2.png",
                        "book": "宠妻成瘾：陆少的心尖宠",
                        "author": "作者：漫道酱",
                        "fans": "人气：54.19万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249958/3415789_3886464300f74799b0b73772acd6b8ed.png",
                        "book": "驭兽灵妃",
                        "author": "作者：博易动漫",
                        "fans": "人气：53.97万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/181525/181525_204005121c6449f4a2cf62645f6924e7.jpg",
                        "book": "桃花宝典",
                        "author": "作者：有鹿文化，河取",
                        "fans": "人气：53.41万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249986/3417958_54266c2551724c94896155523c35ee72.jpg",
                        "book": "奸妃如此多娇",
                        "author": "作者：博易动漫",
                        "fans": "人气：51.51万"
                    }]
                },
                {
                    title:"畅销榜",
                    arr: [{
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177507/177507_64ab234dd89342fdbdb591aeee63bec4.jpg",
                        "book": "剃头匠",
                        "author": "作者：云栖动漫",
                        "fans": "人气：153.59万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/179178/179178_fdfdc354365742d6a2e02e904803ea26.jpg",
                        "book": "都市极品仙医",
                        "author": "作者：肖焌瑜",
                        "fans": "人气：110.78万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/180667/180667_2c8158fe554f4e06b1911385b6ba721f.jpg",
                        "book": "劫天运",
                        "author": "作者：肥鱼工作室",
                        "fans": "人气：108.07万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/185218/185218_4175a279ba484b56a7fe814cad58d5ec.jpg",
                        "book": "中华神医",
                        "author": "作者：极光动漫",
                        "fans": "人气：85.07万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/239975/2167202_3263caa5553442df8354d234aaeecc5c.jpg",
                        "book": "无上神王",
                        "author": "作者：重庆慢慢画",
                        "fans": "人气：83.12万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/246965/2218476_6d8673029ca94ce5946cff6344d7ee99.jpg",
                        "book": "魔法仙气一乾坤",
                        "author": "作者：缘漫动漫",
                        "fans": "人气：79.77万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/180377/180377_5f2fbf29d81a479c8ac53897259bdb22.jpg",
                        "book": "豪门天价前妻",
                        "author": "作者：闲林",
                        "fans": "人气：77.49万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247763/2299876_7323446d81d448d1bf21c44f014236f4.jpg",
                        "book": "都市神豪系统",
                        "author": "作者：肥鱼工作室",
                        "fans": "人气：71.34万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247057/2225868_b5c60d27274348a98e916eef7d2ce966.jpg",
                        "book": "全职法师",
                        "author": "作者：阅文漫画",
                        "fans": "人气：50.24万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/178050/178050_049bcc90089d489fa1ffe54cd02c6501.jpg",
                        "book": "何故为卿狂",
                        "author": "作者：汁汁",
                        "fans": "人气：49.67万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/248997/3247489_6928639e10e1492799952b8cc1cc4f24.jpg",
                        "book": "最强神兽系统",
                        "author": "作者：麦藕动漫",
                        "fans": "人气：45.74万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249073/3314523_903d62e0530a47319746ee5f0347c5c9.jpg",
                        "book": "才不是金手指",
                        "author": "作者：麦藕动漫",
                        "fans": "人气：45.61万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/246671/2205234_d9e28d57e8fb4ac6b15ccc3a076baef1.jpg",
                        "book": "他是龙傲天",
                        "author": "作者：杭州琪漫工作室",
                        "fans": "人气：44.83万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249078/3314528_66ac0bdae75d42f9a193377060b799a2.jpg",
                        "book": "武逆九天",
                        "author": "作者：云栖工作室",
                        "fans": "人气：42.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249347/3353215_18377bd758664b6482cd477a259d3d0a.jpg",
                        "book": "我身上有条龙",
                        "author": "作者：噼咔噼",
                        "fans": "人气：41.83万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/182348/182348_5c21df56e2dc4ee5ac03cfd80187101a.jpg",
                        "book": "帝少别太猛",
                        "author": "作者：云端漫画",
                        "fans": "人气：41.13万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177124/177124_20db9e7f597c45d382bb64c508c08a51.jpg",
                        "book": "王爷你好贱",
                        "author": "作者：追梦动漫",
                        "fans": "人气：40.61万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/167568/167568_4f0301a1f36b4867b8504bc861093cf4.jpg",
                        "book": "仙逆",
                        "author": "作者：cal",
                        "fans": "人气：38.49万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249106/3323454_613bb3e862e545d1ad0815e30ee17ae1.jpg",
                        "book": "绝世剑神",
                        "author": "作者：大衍五十",
                        "fans": "人气：38.38万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/243922/2172441_2e81e5d220d64e819334555c1e8d9128.jpg",
                        "book": "逆战超能白狼",
                        "author": "作者：缘漫动漫",
                        "fans": "人气：38.22万"
                    }]
                },
                {
                     title: "新书榜",
                    arr: [{
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249957/3415788_63558a0c7a024db385092b409b08954d.jpg",
                        "book": "逆天神龙系统",
                        "author": "作者：红鲤鱼工作室",
                        "fans": "人气：82.74万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249931/3399770_533143ab95e6416c9c1e6f359952375c.png",
                        "book": "拐个妈咪带回家",
                        "author": "作者：十二章纹",
                        "fans": "人气：82.46万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249960/3415791_741bbbdbbe0d4bfe8a04fbcd4a3e42c3.jpg",
                        "book": "逆袭天后系统",
                        "author": "作者：尘鱼漫画工作室",
                        "fans": "人气：68.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249959/3415790_d697474e137c45c8bb49dc464545fa25.jpg",
                        "book": "重生之魔尊当道",
                        "author": "作者：初新动漫",
                        "fans": "人气：61.15万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249961/3415792_05831c823842441998266a42a518c5aa.jpg",
                        "book": "万古天帝",
                        "author": "作者：博易动漫",
                        "fans": "人气：54.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249947/3413422_cf29a17a0e7b48fc9fd5577d015fdff2.png",
                        "book": "宠妻成瘾：陆少的心尖宠",
                        "author": "作者：漫道酱",
                        "fans": "人气：54.19万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249958/3415789_3886464300f74799b0b73772acd6b8ed.png",
                        "book": "驭兽灵妃",
                        "author": "作者：博易动漫",
                        "fans": "人气：53.97万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249986/3417958_54266c2551724c94896155523c35ee72.jpg",
                        "book": "奸妃如此多娇",
                        "author": "作者：博易动漫",
                        "fans": "人气：51.51万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249911/3399516_808d6e1d5a00407dbd1f563a55a805c8.png",
                        "book": "超级微信",
                        "author": "作者：神鱼漫社",
                        "fans": "人气：50.64万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249976/3416850_2d617e6b760f41539bc2aea1af6b861a.png",
                        "book": "最强原始人",
                        "author": "作者：惊奇工场",
                        "fans": "人气：43.59万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249983/3416986_d4f2927efacf4598a79ba960ff6ca37c.png",
                        "book": "腹黑邪王宠入骨",
                        "author": "作者：阿柯文化",
                        "fans": "人气：42.33万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249904/3399187_f0e44326375944339af3bb8b4f652881.png",
                        "book": "我的美女特工老婆",
                        "author": "作者：掌阅",
                        "fans": "人气：40.96万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249879/3394752_61890855d72a437eae8a934bfb183015.jpg",
                        "book": "萌妃来袭 天降熊猫求抱抱",
                        "author": "作者：iCiyuan动漫",
                        "fans": "人气：40.80万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249901/3399186_000c28e4ad7d4b49b2c567912e6c1bb3.png",
                        "book": "天才酷宝：总裁宠妻太强悍",
                        "author": "作者：掌阅",
                        "fans": "人气：37.69万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249948/3414787_9f1026f8238840cb979e078dc6683a14.png",
                        "book": "恋人的2种打开方式",
                        "author": "作者：元气工场",
                        "fans": "人气：36.43万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249943/3399853_c80a80a6d5e94876873475cce9c3ca33.jpg",
                        "book": "萌宝来袭：妈咪我爹地呢？",
                        "author": "作者：阿柯文化",
                        "fans": "人气：34.16万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249951/3415027_b604b4c42a0644b094fe839b6c529c6d.jpg",
                        "book": "天外江湖之我的落跑大神",
                        "author": "作者：畅漫",
                        "fans": "人气：26.01万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249964/3416397_3e6bfe1138fc4ca397c82e97fd7acb8a.png",
                        "book": "深夜书屋",
                        "author": "作者：阅文漫画",
                        "fans": "人气：24.25万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249962/3416382_f49387088aa64db199bd3f7f6e0b6823.jpg",
                        "book": "魔二代",
                        "author": "作者：重庆慢慢画",
                        "fans": "人气：23.83万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249971/3416831_bfa6619a4edc4edc93688feb3b80e173.jpg",
                        "book": "重生仙尊在校园",
                        "author": "作者：漫画岛",
                        "fans": "人气：19.64万"
                    }]
                },
                {
                     title: "完结榜",
                    arr: [{
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177601/177601_ca23d67669d34c8c8699a5db90f17c6f.jpg",
                        "book": "王牌校草",
                        "author": "作者：有鹿文化,一只柚子",
                        "fans": "人气：22.80万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177352/177352_b01935d906db4b10aa52b82ccc143950.jpg",
                        "book": "西游学院",
                        "author": "作者：耿俊",
                        "fans": "人气：13.06万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/248647/2618977_eb83e797388249769d17983e425e3d2e.jpg",
                        "book": "我家总裁吃软饭",
                        "author": "作者：拂晓联盟",
                        "fans": "人气：12.29万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/213736/2053988_7af008b6e46043c8a01c02ef8cd08f6d.jpg",
                        "book": "家兄又在作死",
                        "author": "作者：云端漫画",
                        "fans": "人气：9.21万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177600/177600_de43d9a4e817454e992f51d619a314e3.jpg",
                        "book": "豪门第一盛婚",
                        "author": "作者：有鹿文化,瓶子",
                        "fans": "人气：8.74万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/168458/168458_51b101f968b547b29eba9e470147a345.jpg",
                        "book": "偷星九月天",
                        "author": "作者：周洪滨",
                        "fans": "人气：8.68万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/183371/183371_2eeddf55d84b4db288a4a421fd9b3a06.jpg",
                        "book": "一夜孽情",
                        "author": "作者：左岸卡漫",
                        "fans": "人气：8.16万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/178050/178050_049bcc90089d489fa1ffe54cd02c6501.jpg",
                        "book": "何故为卿狂",
                        "author": "作者：汁汁",
                        "fans": "人气：8.12万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/209531/2021717_bde4f23b31a74539be29fbfae3151091.jpg",
                        "book": "我的丁丁不可能这样没了",
                        "author": "作者：元气工场",
                        "fans": "人气：8.12万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/182348/182348_5c21df56e2dc4ee5ac03cfd80187101a.jpg",
                        "book": "帝少别太猛",
                        "author": "作者：云端漫画",
                        "fans": "人气：7.53万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/206872/2015967_fb9b48464c7d492595efafe271d1cc82.jpg",
                        "book": "我们的少年时代",
                        "author": "作者：一波人漫画工作室",
                        "fans": "人气：7.51万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/195760/195760_ab8dd3feb43c42b5a6db10e3256a5aa4.jpg",
                        "book": "王爵的私有宝贝",
                        "author": "作者：云端漫画",
                        "fans": "人气：6.79万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/181524/181524_9ff8d2ca7ade456aa58d6253969f9b15.jpg",
                        "book": "极品辣妈好v5",
                        "author": "作者：有鹿文化，咸鱼",
                        "fans": "人气：6.66万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/180305/de70af962db444d3ad56c8f8f3d63ed3.jpg",
                        "book": "系芯结",
                        "author": "作者：笔锋王座原创漫画社",
                        "fans": "人气：6.60万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/183515/183515_418fdf42283a49ea981511917cf06279.jpg",
                        "book": "琴帝",
                        "author": "作者：漫娱文化",
                        "fans": "人气：6.59万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247058/2225870_f6f2bdddb4cb4aeba5dde78e5795805a.jpg",
                        "book": "女校攻略",
                        "author": "作者：奇小怪",
                        "fans": "人气：6.40万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/179346/179346_30dbb4fb12ee4610b4f1bb2e5bed6281.jpg",
                        "book": "本宫有点方",
                        "author": "作者：灵创动漫工作室",
                        "fans": "人气：6.07万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/247866/2366922_c71860112ec649dd815f15d7dd10f9c2.jpg",
                        "book": "白泽图",
                        "author": "作者：尘鱼漫画工作室",
                        "fans": "人气：5.77万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/246683/2206150_76f5b04c360b49769eb480ab9ea78537.jpg",
                        "book": "血族总裁别咬我",
                        "author": "作者：歪歪狐漫画工作室",
                        "fans": "人气：5.49万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/177025/177025_a2630c2dfc0a4cb09c28a9fcbaaf3d09.jpg",
                        "book": "天狐劫",
                        "author": "作者：泷羽",
                        "fans": "人气：5.47万"
                    }]
                },
                {
                     title: "免费榜",
                    arr: [{
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249957/3415788_63558a0c7a024db385092b409b08954d.jpg",
                        "book": "逆天神龙系统",
                        "author": "作者：红鲤鱼工作室",
                        "fans": "人气：82.74万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249931/3399770_533143ab95e6416c9c1e6f359952375c.png",
                        "book": "拐个妈咪带回家",
                        "author": "作者：十二章纹",
                        "fans": "人气：82.46万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249672/3389293_2404e102203e40fd8183fbc87a040d44.jpg",
                        "book": "重生八万年",
                        "author": "作者：掌阅",
                        "fans": "人气：74.01万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249960/3415791_741bbbdbbe0d4bfe8a04fbcd4a3e42c3.jpg",
                        "book": "逆袭天后系统",
                        "author": "作者：尘鱼漫画工作室",
                        "fans": "人气：68.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249630/3387148_0176148bda6a4ebcb1f8ee30108defc1.jpg",
                        "book": "女帝的后宫",
                        "author": "作者：拂晓联盟",
                        "fans": "人气：64.83万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249959/3415790_d697474e137c45c8bb49dc464545fa25.jpg",
                        "book": "重生之魔尊当道",
                        "author": "作者：初新动漫",
                        "fans": "人气：61.15万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249961/3415792_05831c823842441998266a42a518c5aa.jpg",
                        "book": "万古天帝",
                        "author": "作者：博易动漫",
                        "fans": "人气：54.76万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249947/3413422_cf29a17a0e7b48fc9fd5577d015fdff2.png",
                        "book": "宠妻成瘾：陆少的心尖宠",
                        "author": "作者：漫道酱",
                        "fans": "人气：54.19万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249958/3415789_3886464300f74799b0b73772acd6b8ed.png",
                        "book": "驭兽灵妃",
                        "author": "作者：博易动漫",
                        "fans": "人气：53.97万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249986/3417958_54266c2551724c94896155523c35ee72.jpg",
                        "book": "奸妃如此多娇",
                        "author": "作者：博易动漫",
                        "fans": "人气：51.51万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249670/3389294_e6cf3a6d2c5f4ecd80ae488d4cdd451c.jpg",
                        "book": "总裁爹地超给力",
                        "author": "作者：掌阅",
                        "fans": "人气：47.90万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249661/3388313_f35a29a441e14d7eb7952340789f481e.jpg",
                        "book": "神级透视",
                        "author": "作者：掌阅",
                        "fans": "人气：46.39万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249789/3392514_369d685f71464e75aa88066f68e9a7df.jpg",
                        "book": "最强纨绔系统",
                        "author": "作者：柒漫",
                        "fans": "人气：44.48万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249976/3416850_2d617e6b760f41539bc2aea1af6b861a.png",
                        "book": "最强原始人",
                        "author": "作者：惊奇工场",
                        "fans": "人气：43.59万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249983/3416986_d4f2927efacf4598a79ba960ff6ca37c.png",
                        "book": "腹黑邪王宠入骨",
                        "author": "作者：阿柯文化",
                        "fans": "人气：42.33万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249671/3389292_8acd790462f04b3cb882a0549ce13af3.jpg",
                        "book": "重生弃少归来",
                        "author": "作者：掌阅",
                        "fans": "人气：41.20万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249904/3399187_f0e44326375944339af3bb8b4f652881.png",
                        "book": "我的美女特工老婆",
                        "author": "作者：掌阅",
                        "fans": "人气：40.96万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249879/3394752_61890855d72a437eae8a934bfb183015.jpg",
                        "book": "萌妃来袭 天降熊猫求抱抱",
                        "author": "作者：iCiyuan动漫",
                        "fans": "人气：40.80万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249901/3399186_000c28e4ad7d4b49b2c567912e6c1bb3.png",
                        "book": "天才酷宝：总裁宠妻太强悍",
                        "author": "作者：掌阅",
                        "fans": "人气：37.69万"
                    }, {
                        "src": "//img.manhuadao.cn/bookcenter/coverimages/249948/3414787_9f1026f8238840cb979e078dc6683a14.png",
                        "book": "恋人的2种打开方式",
                        "author": "作者：元气工场",
                        "fans": "人气：36.43万"
                    }]
                }
            ]
        }
    }
    render(){
        let {data} = this.state;
        console.log(data);
        return <div className="paihang">
                    <header className="header-normal">
                        <div className="header-back"><Icon onClick={()=>{this.props.history.goBack()}}  style={{fontSize:20}} type="rollback" /></div>
                        <span className="header-title font-32">排行榜</span>
                        <div className="header-search" onClick={()=>this.props.history.push("/search")}><Icon style={{fontSize:20}} type="search" /></div>
                    </header>
                    <div className="main">
                         <div className="card-container">
                             <Tabs type="card">
                                   {
                                       data.map((item,index)=>{
                                           return <TabPane tab={item.title} key={index}>
                                                     {
                                                         item.arr.map((item,index)=>{
                                                             return <div key={item.src} className="list-items">
                                                                 <p><img src={item.src}/></p>
                                                                <div className="item-info">
                                                                    <div className="info-book font-30">{item.book}</div>
                                                                    <div className="info-author font-26">{item.author}</div>
                                                                    <div className="info-fans font-26">{item.fans}</div>
                                                                </div>
                                                             </div>
                                                         })
                                                     }
                                            </TabPane>
                                       })
                                   }
                             </Tabs>
                         </div>
                     </div>
                    <footer className="footer"></footer>
                </div>
    }
}
export default Paihang;