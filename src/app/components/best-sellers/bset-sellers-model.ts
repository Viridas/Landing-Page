export class Seller {
    id: number;
    image: string;
    title: string;
    price: string;

    constructor(image: string, title: string, price: string, id: number) {
        this.id = id,
        this.image = image;
        this.title = title;
        this.price = price;
    }
}