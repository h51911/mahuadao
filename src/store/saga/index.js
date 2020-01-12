import axios from "axios"
function* getAll() {
    axios.get("http://localhost:1912/goods/goods3").then(res => {
        console.log("saga",res);
    })
}
function * rootSaga(){
    console.log("++");
    //takeEvery 监听用户的指令,执行某个操作
    // yield takeEvery("get_cart",getAll)
    
}
export default rootSaga;