import axios from "axios";

const getApi = async (term)=>{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID RsgDvuuSGusD8-AlPSvLOd0XBOk970CETof5J3J25YQ",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;

  }
  export default getApi;