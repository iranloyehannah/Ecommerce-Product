// =============== React & State  ===============
import useIsMobile from "@/hooks/useIsMobile";
import { Images } from "@/lib/ImgData";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import MainImage from "./MainImage";
import Thumbnails from "./Thumbnails";
import Product from "./Product";
import { TagLine } from "@/lib/Tagline";

const Hero: React.FC = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const isMobile = useIsMobile();

  const handleNext = () => {
    setDirection(1);
    setIsSelected((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    // setIsSelected((prev) => (prev + 1) % Images.length)
  };
  const handlePrev = () => {
    setDirection(-1);
    setIsSelected((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full flex  h-full md:mt-25">
      <div className="h-full w-full flex flex-col md:justify-center  md:items-center md:flex-row">
        {isMobile ? (
          // Mobile View
          <>
 <>
  <div className="relative">
    {/* Main Image */}
    <MainImage
      images={Images}
      selectedIndex={isSelected}
      direction={direction}
      onNext={handleNext}
      onPrev={handlePrev}
    />

    {/* Product Text Overlay */}
    <div className="absolute top-[85%] bg-white flex items-center justify-center">
      <div className=" w-[95%]">
        <Product tagline={TagLine} />
      </div>
    </div>
  </div>
</>
</>
        ) : (
          // Desktop view
          <div className="w-full  flex md:gap-5 lg:gap-0 lg:justify-around ">
            <div className=" flex flex-col items-center  gap-2">
              <img
                src={Images[isSelected].src}
                alt={Images[isSelected].alt}
                className="w-[400px] rounded-xl"
                onClick={() => setShowModal(true)}
              />
              <Thumbnails
                images={Images}
                selectedIndex={isSelected}
                onSelect={setIsSelected}
              />
            </div>
            {/* Tagline */}
            <Product tagline={TagLine} />
          </div>
        )}
      </div>
      {/* Desktop view image modal */}
     {showModal && !isMobile && (
  <div
    className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center"
    onClick={() => setShowModal(false)}
  >
    {/* close Button */}
    <div
      className="flex flex-col w-full max-w-[420px]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowModal(false)}
        className="flex justify-end mb-4"
      >
        <HiX className="w-6 h-6 text-[var(--orange)]" />
      </button>
      <div className="space-y-4 gap-2">
        <MainImage
          images={Images}
          selectedIndex={isSelected}
          direction={direction}
          onNext={handleNext}
          onPrev={handlePrev}
        />
        <Thumbnails
          images={Images}
          selectedIndex={isSelected}
          onSelect={setIsSelected}
        />
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Hero;
