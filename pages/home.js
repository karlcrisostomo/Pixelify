import { useFeaturedImages } from "./api/featured";
import { useSearchContext } from "@/context/SearchContext";
import { useState } from "react";
import { Photos } from "@/components";

const Home = () => {
  const { searchResult, handleLoadMore } = useSearchContext();
  const [isHovered, setHovered] = useState(null);

  const featuredImages = useFeaturedImages(); // Get the random images

  return (
    <>
      <section className="py-16">
        <div className="styled_container">
          {((searchResult && searchResult.length > 0) ||
            featuredImages.length > 0) && (
            <div className="image_container">
              {(searchResult.length > 0 ? searchResult : featuredImages).map(
                (image, index) => (
                  <Photos
                    src={image.src.large}
                    alt={image.photographer}
                    isHovered={isHovered}
                    setHovered={setHovered}
                    index={index}
                    key={index}
                  />
                )
              )}
            </div>
          )}

          {searchResult && searchResult.length > 0 && (
            <div className="flex justify-center mt-12">
              <button
                className="font-medium dark:bg-gray-900 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl hover:shadow-gray-600 tracking-wider transition-all hover:scale-105 hover:font-bold text-white p-4 rounded-lg"
                onClick={() => handleLoadMore()}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
