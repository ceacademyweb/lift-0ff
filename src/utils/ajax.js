import axios from 'axios'

const myHeaders = new Headers()
const token = sessionStorage.getItem('token') || null

myHeaders.append(
  'content-type', 'application/json'
)
myHeaders.append(
  'authorization', token
)
const apiUrl = 'http://localhost:5000'
export const ajax = (url, data, method)=>{
  const options = {
    method,
    data: JSON.stringify(data),
    headers: myHeaders
  }
 axios(`${apiUrl}${url}`, options)
   .then(res=> {
     if (res.status<300){
       return res
     }
   })
}
