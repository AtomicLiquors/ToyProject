import axios, { AxiosError, AxiosResponse } from "axios";

/* 아래 코드 해석이 되나? */

const snsURL = "http://localhost:8080/api/";
const sampleUser = "oauth_id_1";

export const getPosts = async () => {
  const { data } = await axios.get(snsURL + "posts/search?keyword=2kooong2");
  console.log("success");
  console.log(data);
  return data;
};

export const post = async () => {
  axios
    .post(snsURL + "posts/", {
      userId: sampleUser,
      content: "sample content",
      images: null,
    })
    .then((response: AxiosResponse) => {
      console.log("POST success");
      console.log(response.data);
    })
    .catch((error: AxiosError) => {
        if (error.response) {
            console.error('Server responded with status:', error.response.status);
            //console.error('Response data:', error.response.data);
        } else if (error.request) {
            console.error('No response received from server');
        } else {
            console.error('Error setting up the request:', error.message);
        }
    });
};
