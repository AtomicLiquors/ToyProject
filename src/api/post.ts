import axios, { AxiosError, AxiosResponse } from "axios";

/* 아래 코드 해석이 되나? */

const snsURL = "http://localhost:8080/api/";

const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

console.log(config);

export const getPosts = async () => {
  const { data } = await axios.get(snsURL + "posts/search?keyword=2kooong2");
  console.log("success");
  console.log(data);
  return data;
};



export const post = async (content:string, files:FileList) => {

  const formData = new FormData();
  formData.append("userId", "1");
  formData.append("content", content);
  for (let i = 0; i < files.length; i++) {
    formData.append("images", files[i]);
  }  axios
    .post(snsURL + "posts", formData
    , config)
    .then((response: AxiosResponse) => {
        console.log("POST Success: " + response.data);
    })
    .catch((error: AxiosError) => {
        if (error.response) {
            console.error('Server responded with status:', error.response.status);
        } else if (error.request) {
            console.error('No response received from server');
        } else {
            console.error('Error setting up the request:', error.message);
        }
    });
};
