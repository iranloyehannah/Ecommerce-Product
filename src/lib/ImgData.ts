export type ImgData = {
  id: number;
  src: string;
  thumbnail?: string;
  alt: string;
};
export const Images: ImgData[] = [
  {
    id: 1,
    src: "./src/assets/images/image-product-1.jpg",
    thumbnail: "./src/assets/images/image-product-1-thumbnail.jpg",
    alt: "Image-1",
  } ,
  {
    id: 2,
    src: "./src/assets/images/image-product-2.jpg",
    thumbnail: "./src/assets/images/image-product-2-thumbnail.jpg",
    alt: "Image-2",
  } ,
  {
    id: 3,
    src: "./src/assets/images/image-product-3.jpg",
    thumbnail: "./src/assets/images/image-product-3-thumbnail.jpg",
    alt: "Image-3",
  } ,
  {
    id: 4,
    src: "./src/assets/images/image-product-4.jpg",
    thumbnail: "./src/assets/images/image-product-4-thumbnail.jpg",
    alt: "Image-4",
  } ,
]