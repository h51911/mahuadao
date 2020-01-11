const express = require('express'); //模块访问：缓存
const {
    formatdata
} = require('../utils/formatdata');


const Router = express.Router();

const {
    mysql: query
} = require('../db'); //解构并重命名
// let { create } = require('../utils/token');

// Router.get('/getUser',async (req,res)=>{
//     console.log(req.body,req.params,req.query);
//     // let {user} = req.body;
//     // let sql = `SELECT * from user WHERE user=${user}`;
//     // let data = await query(sql);
//     // data.length?res.send(formatdata({data:data})):res.send(formatdata({ code: 0 }))
//     // res.send(formatdata({ data }));
//     res.send('sdfds');
// })
//查询用户
Router.post('/getUser', async (req, res) => {
    console.log(req.body);
    // console.log(req.body,req.params,req.query);
    let {
        eamil,
        pwd
    } = req.body;
    let sql = `SELECT * from uesers WHERE eamil=${eamil} AND password=${pwd}`;
    let data = await query(sql);
    data.length ? res.send(formatdata({
        data: data
    })) : res.send(formatdata({
        code: 0
    }))
    // res.send(formatdata({ data }));
    // res.send(data);
})

//查询用户，有则登录，没则添加再登录
Router.post("/login", async (req, res) => {

    const {
        eamil,
        pwd
    } = req.body;
    console.log(req.body);
    
    let sql = `SELECT * FROM uesers WHERE eamil = '${eamil}'`;
    let sqlRes = await query(sql);
    // console.log(user,sqlRes);
    if (!sqlRes.length) {
        let sql2 = `INSERT INTO eamil(eamil,password) VALUES('${eamil}','${pwd}')`;
        await query(sql2);
    }
    // token = create(user);
    res.send(formatdata({
        data: eamil
    })); //把token生成后发给前端
console.log(555);

})
//注册用户
Router.post('/reg', async (req, res) => {
    console.log(req.body);
    // console.log(req.body,req.params,req.query);
    let {
        eamil,
        pwd,
        condition
    } = req.body;
    if (eamil) {

        let sql = `SELECT * from uesers WHERE eamil='${eamil}'`;
        let data = await query(sql);
        console.log(data)
        if (data.length) {
            res.send(formatdata({
                code: 0
            }));
        } else {
            //没有找到，可以注册
            if (condition) {
                let sql2 = `insert into uesers(eamil,password) values('${eamil}','${pwd}')`;
                let data2 = await query(sql2);
                res.send(formatdata());
                return;
            }
            res.send(formatdata());
        }
    }
})
module.exports = Router;