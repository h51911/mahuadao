let initState = {
    cartlist: [
       {
             "src": "https://img.manhuadao.cn/upload/BigBook201904/ebf6e7541f084095826fa80e0ffc4d08.png",
             "title": "最强农民工",
             "text": "你到底藏着什么秘密？！"
       }
    ]
}
const reducer = function (state = initState, action) {
    switch (action.type) {
        //添加收藏
        case "add_to_cart":
            return {
                ...state,
                cartlist: [action.payload, ...state.cartlist]
            }
            //删除某条数据
            case "remove_from_cart":
                return {
                    ...state,
                    cartlist: state.cartlist.filter(item => item.id != action.payload)
                }
                //清空购物车
                case "clear_cart":
                    return {
                        ...state,
                        cartlist: []
                    }
    }
    return state;
}
export default reducer;