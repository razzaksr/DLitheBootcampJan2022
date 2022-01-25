import axios from 'axios'

const url="http://localhost:8082/DLitheBootcampBasicPOC/rest"

// axios.method(url,object)

const append=async(obj)=>{
    const ack = await axios.post(`${url}/new`,obj)
    return ack
}

export {append}