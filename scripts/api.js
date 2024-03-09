const API_URL = "http://api.valantis.store:40000/";

const getHeaders = () => {
  const isoString = new Date().toISOString();
  const dateComponents = isoString.split("T")[0];
  const timestamp = dateComponents.replace(/-/g, "");

  const authString = CryptoJS.MD5(`Valantis_${timestamp}`).toString();

  return {
    "X-Auth": authString,
    "Content-Type": "application/json",
  };
};
