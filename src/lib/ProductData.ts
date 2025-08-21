export type ProductsData = {
        id:number;
        name: string;
        productName: string;
        description: string;
        price: number;
        priceOff: number;
        discount?: number;
}

export const ProductDescription: ProductsData[] = [
    {
        id: 1,
        name: "SNEAKER COMPANY",
        productName: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 125,
        priceOff: 50,
        discount: 250
    },
]