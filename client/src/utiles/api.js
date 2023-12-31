import axios from "axios";

const BASE_URL = "http://localhost:8800" ;
const fetchGetDataFromApi = async(url)=>{
    try{
        const {data} = await axios.get(BASE_URL+url)
        return data ;
    }catch(err){
        return err ;
    }
}
const fetchPostDataFromApi = async(url,params)=>{
    try{
        const {data} = await axios.post(BASE_URL+url ,{
            params 
        })
        return data ;
    }catch(err){
        return err ;
    }
}

export {fetchGetDataFromApi,fetchPostDataFromApi} ;