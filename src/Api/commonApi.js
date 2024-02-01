import {getReq, postReq,deleteReq, putReq} from './api'; 
const getCompanyList = async (urlRoute)=> {
    var url = urlRoute;
    return getReq(url, {})
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const postData = async (urlRoute,data) => {
    var url = urlRoute;
    // var data = sources;
    return postReq(url, data, {})
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const updateData = async (urlRoute,data) => {
    var url = urlRoute;
    // var data = sources;
    return putReq(url, data, {})
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        return err;
      });
  };


  const deleteData = async (urlRoute) => {
    var url = urlRoute;
    // var data = sources;
    return deleteReq(url,{})
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  export {getCompanyList, postData,deleteData, updateData}