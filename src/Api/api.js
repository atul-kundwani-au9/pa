import axios from "axios";

const getReq = (url, headers = {}) => {
   // headers = makeDefaultHeaders(headers);
    return axios({
      headers: headers,
      method: "get",
      url: url
    }).catch((error) => {
      if (error.response) {
      //  handleError(error.response.status);
        return error.response.status;
      }
    });
  };

  
  const deleteReq = (url, headers = {}) => {
    // headers = makeDefaultHeaders(headers);
     return axios({
       headers: headers,
       method: "delete",
       url: url
     }).catch((error) => {
       if (error.response) {
       //  handleError(error.response.status);
         return error.response.status;
       }
     });
   };
 
 
  

  const postReq = (url, data = {}, headers = {}) => {
    return axios({
      method: "post",
      data: data,
      url: url,
    }).catch((error) => {
      if (error.response) {
        
        return error.response.status;
      }
    });
  };
  
  const putReq = (url, data = {}, headers = {}) => {
 
    return axios({
      headers: headers,
      method: "put",
      data: data,
      url: url,
    }).catch((error) => {
      if (error.response) {
      
        return error.response.status;
      }
    });
  };
  

  


export {getReq, postReq,deleteReq,putReq} ;