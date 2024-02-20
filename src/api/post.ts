import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = "http://localhost:8080/api/";


export const getPosts = async () => {
  const { data } = await axios.get(baseURL + "posts/search?keyword=2kooong2");
  //const { data } = await postRequest("posts/search?keyword=2kooong2");
  return data;
};
const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  },
};

export const post = async (content: string, files: FileList): Promise<AxiosResponse | AxiosError> => {
  const formData = new FormData();
  formData.append("userId", "1");
  formData.append("content", content);
  for (const file of files) {
    formData.append("images", file);
  }

  const response = await axios
    .post(baseURL + "posts", formData, config)
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error: AxiosError) => {
      return error;
    });
  
    return response;
};
