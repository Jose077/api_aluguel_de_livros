interface ICreateBookDTO {
    id?: string;
    title: string;
    description: string;
    image_url: string;
    book_url: string;
    price: number;
    author?: string;
    edition?: number;
    available?: boolean 

}