import axios from "axios";

export const getData = async (url) => {
  try {
    let data = await axios(url);
    // console.log(data);
    return data.data;
  } catch (err) {
    console.log({
      location: "problem in get api",
      url: url,
      error: err,
    });
  }
};

export const postData = async (url,data) => {
    try {
      let d = await axios.post(url,data);
    console.log(d,"oj-----------------------------");
      return d.data;
    } catch (err) {



      return  Promise.reject(err)
      // console.log({
      //   location: "problem in post api",
      //   url: url,
      //   error: err.response.data,
      // });
    }
  };
