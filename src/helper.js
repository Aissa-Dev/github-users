import axios from "axios";

export const getArray = async (url) => {
  let cleanUrl = url.replace("{/other_user}", "");
  const array = await axios.get(cleanUrl);
  console.log("array : ", array.data);
};
