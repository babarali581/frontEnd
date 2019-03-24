import request, { apiRequest } from '../utils/request';


export async function addproductService(payload) {
    console.log("insideeeeeeee service ",payload)
    return   apiRequest('http://localhost:5000/store', {
      method: 'POST',
      body: {
       store:payload
      }
    });

}
