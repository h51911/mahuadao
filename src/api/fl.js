import axios from "axios";
const Fl = axios.create({
    baseURL: "https://m.manhuadao.cn/search-result.html"
});
export const get = async (params, config = {}) => {
    let {
        data
    } = await Fl.get("", {
        ...config,
        params
    })
    return data;
}
export default {
    get
}