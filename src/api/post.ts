import axios, { AxiosError, AxiosResponse } from "axios";

const snsURL = "http://localhost:8080/api/";

const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

export const getPosts = async () => {
  const { data } = await axios.get(snsURL + "posts/search?keyword=2kooong2");
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
        return response;
    })
    .catch((error: AxiosError) => {
        return error;
    });
};
