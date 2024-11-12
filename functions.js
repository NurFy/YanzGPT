import axios from "axios";

const baseURL = "https://yanzgpt.my.id/";
/**
 * not suitable for image request
 * @param {string} content prompt
 * @returns
 */
const YanzGPT = async (content) => {
  return new Promise(async (resolve, reject) => {
    const obj = {
      messages: [{ role: "user", content }],
      model: "yanzgpt-revolution-25b-v3.0",
    };

    try {
      const { data } = await axios({
        method: "POST",
        baseURL,
        url: "/chat",
        headers: {
          Authorization: "Bearer yzgpt-sc4tlKsMRdNMecNy",
          "Content-Type": "application/json",
          Origin: baseURL,
          Referer: `${baseURL}chat`,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        },
        data: obj,
      });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export default YanzGPT;
