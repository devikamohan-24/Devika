import axios from "./index";

const addProduct=(data)=>{
    return axios({
        method:"post",
        url:"api/products",
        data
    })
}

const viewAllProduct=()=>{
    return axios({
        method:"get",
        url:"api/products"
    })
    .then(res=>{
        return res.data;
    })
}

const deleteProduct=(id)=>{
    return axios({
        method:"delete",
        url:`api/products/${id}`
    })
    .then(res=>{
        return res.data;
    })
}

const updateProduct=(id,data)=>{
    return axios({
        method:"post",
        url:`api/products/${id}`,
        data
    })
    .then(res=>{
        return res.data;
    })
}

export {
    addProduct,
    viewAllProduct,
    deleteProduct,
    updateProduct
}