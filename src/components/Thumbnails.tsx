import { type ImgData } from "@/lib/ImgData";
interface ThumbnailsProps {
  images: ImgData[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}
const Thumbnails: React.FC<ThumbnailsProps> = ({
  images,
  selectedIndex,
  onSelect,
}) => {
  return (
<div className="flex justify-center gap-3 sm:gap-4 flex-wrap md:flex-nowrap">
      {images.map((img, index) => (
        <div
          key={img.id}
          onClick={() => onSelect(index)}
          className={`relative w-[80px] h-[80px] object-cover cursor-pointer overflow-hidden rounded-xl border-2  ${
            selectedIndex === index
              ? "border-2 border-[var(--orange)]"
              : "border-transparent"
          }`}
        >
          <img
            src={img.thumbnail}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
          {/* Selected overlay */}
          {selectedIndex === index && (
            <div className="absolute inset-0 bg-[var(--pale-orange)]/70"></div>
          )}
          {/* Unselected  overlay */}
          {selectedIndex !== index && (
            <div className="absolute inset-0 transition hover:bg-[var(--pale-orange)]/70"></div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Thumbnails;
