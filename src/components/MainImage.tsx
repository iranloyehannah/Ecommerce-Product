import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface MainImageProps {
  images: { id: number; src: string; alt: string }[];
  selectedIndex: number;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
  clickable?: boolean;
  onClick?: () => void;
}

const MainImage: React.FC<MainImageProps> = ({
  images,
  selectedIndex,
  direction,
  onNext,
  onPrev,
  clickable = false,
  onClick,
}) => {
  return (
    <div className="relative w-screen md:w-full  md:mx-0  sm:-mx-6">
      {/* Main Image Modal */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.img
          key={images[selectedIndex].id}
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={clickable ? onClick : undefined}
          className="w-full md:w-full lg:rounded-xl object-cover"
        />
      </AnimatePresence>

      {/* Overlay Arrows On Image & Mobile Display */}
      <button
        className="absolute left-3  md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center "
        onClick={onPrev}
      >
        <HiChevronLeft className="w-7 h-7 text-black hover:text-[var(--orange)] transition-colors ease-out" />
      </button>

      <button
        className="absolute  right-3 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow pointer-events-auto"
        onClick={onNext}
      >
        <HiChevronRight className="w-7 h-7 text-black hover:text-[var(--orange)] transition-colors ease-out" />
      </button>
    </div>
  );
};

export default MainImage;
