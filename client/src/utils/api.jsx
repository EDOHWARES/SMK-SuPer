import axios from "axios";

export const fetchHomePageData = async () => {
  const API_URL = "http://localhost:1337/api/home-pages?populate=*";

  try {
    const response = await axios.get(API_URL);
    const homepageData = response.data.data[0]; // Only one homepage entry

    return homepageData;
  } catch (error) {
    console.error("Failed to fetch homepage data:", error.message);
    return null;
  }
};
