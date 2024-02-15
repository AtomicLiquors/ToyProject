import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = "http://localhost:8080/api/";

const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

const postRequest = axios.create({
  baseURL: baseURL,
})

postRequest.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error);
  }
);

postRequest.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error);
  }
);


export const getPosts = async () => {
  //const { data } = await axios.get(baseURL + "posts/search?keyword=2kooong2");
  const { data } = await postRequest("posts/search?keyword=2kooong2");
  return data;
};



export const post = async (content:string, files:FileList) => {

  const formData = new FormData();
  formData.append("userId", "1");
  formData.append("content", content);
  for (let i = 0; i < files.length; i++) {
    formData.append("images", files[i]);
  }  axios
    .post(baseURL + "posts", formData
    , config)
    .then((response: AxiosResponse) => {
        return response;
    })
    .catch((error: AxiosError) => {
        return error;
    });
};
