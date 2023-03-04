const Tours = [{
    description: "From the south to the center of the country",
    id: "1",
    img: "ocean.jpg",
    name: "Mexico",
    price: "€2,192",
    tourOperator: "LocalAdventures"}]

export interface ITours {
    description: string,
    id: number,
    name: string,
    img: boolean,
    price:number,
    tourOperator:string
}