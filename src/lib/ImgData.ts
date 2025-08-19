// ==================== import Images ==================== 
import img1 from "../assets/images/image-product-1.jpg";
import img1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import img4Thumb from "../assets/images/image-product-4-thumbnail.jpg";

export type ImgData = {
  id: number;
  src: string;
  thumbnail?: string;
  alt: string;
};
export const Images: ImgData[] = [
  {
    id: 1,
    src: img1,
    thumbnail: img1Thumb,
    alt: "Image-1",
  } ,
  {
    id: 2,
    src: img2,
    thumbnail: img2Thumb,
    alt: "Image-2",
  } ,
  {
    id: 3,
    src: img3,
    thumbnail: img3Thumb,
    alt: "Image-3",
  } ,
  {
    id: 4,
    src: img4,
    thumbnail: img4Thumb,
    alt: "Image-4",
  } ,
]