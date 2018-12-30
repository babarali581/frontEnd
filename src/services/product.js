import request, { apiRequest } from '../utils/request';


export async function addproductService(payload) {
    console.log("insideeeeeeee service")
    return   apiRequest('http://localhost:5000/store', {
      method: 'POST',
      body: {
       store:payload
      }
    });

}
