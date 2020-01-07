import axios from "axios";
const Mhd = axios.create({
    baseURL: "https://mhd.zhuishushenqi.com/comic_v2/customerview"
});
export const get = async (params, config = {}) => {
    let {data} = await Mhd.get("",{
        ...config,
        params
    })
    return data;
}
export default {
    get
}