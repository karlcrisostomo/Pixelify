import { useEffect, useState } from "react";
import { fetchDataFromPexels } from "./pexelsAPI";

export const useFeaturedImages = () => {
  const [featuredImages, setFeaturedImages] = useState([]);

  const getRandomCategories = () => {
    const categories = [
      "food",
      "animation",
      "animals",
      "interior",
      "abstract",
      "nature",
      "landscapes",
      "art",
      "fashion",
      "wallpapers",
      "flowers",
      "cars",
    ];

    for (let i = categories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [categories[i], categories[j]] = [categories[j], categories[i]];
    }

    return categories;
  };

  useEffect(() => {
    const categories = getRandomCategories();

    const fetchFeaturedImages = async () => {
      try {
        const imagesPromises = categories.map(async (category) => {
          const images = await fetchDataFromPexels(category);
          return images[0]; // Get the first image from each category
        });

        const featuredImagesData = await Promise.all(imagesPromises);
        setFeaturedImages(featuredImagesData);
      } catch (error) {
        console.error("Error fetching featured images:", error);
      }
    };

    fetchFeaturedImages();
  }, []);

  return featuredImages;
};
