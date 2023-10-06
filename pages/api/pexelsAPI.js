import axios from "axios";

const apiKey = "SxVwj36R9BsWY0Lr82ZobidJmQShxScnA3G8nA6UNjYgI6Op45xnE6k6";

export const fetchDataFromPexels = async (query, item) => {
  try {
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=${item}`;

    //headers
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    });

    // Check if the response is successful and contains data
    if (response.status === 200 && response.data.photos) {
      return response.data.photos || [];
    } else {
      console.error(
        "Error fetching data from Pexels API:",
        response.statusText
      );
      return [];
    }
  } catch (error) {
    console.error("Error fetching data from Pexels API:", error);
    return [];
  }
};
