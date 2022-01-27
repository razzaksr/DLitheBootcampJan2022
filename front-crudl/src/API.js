import axios from 'axios'

const url="http://localhost:8082/DLitheBootcampBasicPOC/rest"

// axios.method(url,object)

const append=async(obj)=>{
    const ack = await axios.post(`${url}/new`,obj)
    return ack
}

const traverse=async()=>{
    const tmp=await axios.get(`${url}/`)
    return tmp
}

const oneAtTime=async(param)=>{
    const tmp = await axios.get(`${url}/${param}`)
    return tmp
}

const terminate=async(param)=>{
    const t = await axios.delete(`${url}/remove/${param}`)
    return t
}

export {append, traverse, oneAtTime, terminate}