/*import axios from "axios";

axios.interceptors.request.use(
  (request) => {
    console.log("요청 내용 : " +  JSON.stringify(request));
    return request;
  },
  (error) => {
    console.log("에러 : " + JSON.stringify(error.response));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("성공 : " + JSON.stringify(response));
    return response;
  },
  (error) => {
    console.log("에러 : " + JSON.stringify(error.response));
    return Promise.reject(error);
  }
);
*/