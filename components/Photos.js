import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSearchContext } from "@/context/SearchContext";
import Loader from "./Loader";

const Photos = ({ src, alt, index, isHovered, setHovered }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isLoading } = useSearchContext();
  const togglePic = () => {
    setIsPopupOpen((toggle) => !toggle);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();

      // Create a URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${alt}.jpg`;
      a.style.display = "none";

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <div>
      <div onClick={togglePic}>
        {isLoading ? (
          <Loader />
        ) : (
          <Image
            key={index}
            className="image_item"
            width={500}
            height={500}
            src={src}
            alt={alt}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          />
        )}

        <div className="flex justify-center">
          {isHovered === index && <p className="image_hovered ">{alt}</p>}
        </div>
      </div>
      {isPopupOpen && (
        <div className="image_Popup">
          <div className="container mx-auto">
            <div className="flex justify-end">
              <AiOutlineClose
                size={32}
                className="cursor-pointer hover:text-red-700 max-md:-translate-y-24 md:-translate-y-12 max-md:translate-x-5 hover:scale-90 transition-all"
                onClick={togglePic}
              />
            </div>
            <div className=" max-w-lg mx-auto my-auto max-sm:w-60 sm:w-96 md:w-[400px]">
              <img src={src} alt={alt} />
              <span className=" flex justify-center">
                <button className="styled_dl_btn" onClick={handleDownload}>
                  Download
                </button>
              </span>
            </div>

            {/* Add the Download button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
