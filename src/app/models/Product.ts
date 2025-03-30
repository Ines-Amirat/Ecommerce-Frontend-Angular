export class Product {
    productId : number;
    name: string;
    description: string;
    price :number;
    stockQuantity:number;
    imageURL: string;
    oldPrice: number;
    fullDescription:string;
    brand:string;
    shortDescription:string;
    stock :number;
    features:string[];
    


    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        stockQuantity :number,
        imageURL :string,
        oldPrice: number,
        fullDescription:string,
        brand:string,
        shortDescription:string,
        stock:number,
        features :string[]
        ){
        this.productId  = id;
        this.name =name;
        this.description =description;
        this.price =price;
        this.stockQuantity =stockQuantity;
        this.imageURL =imageURL;
        this.oldPrice =oldPrice;
        this.fullDescription = fullDescription;
        this.brand =brand
        this.shortDescription = shortDescription;
        this.stock = stock;
        this.features = features
    
    
        

    }

}