import { DatePipe } from "@angular/common";

export class Products {
    constructor (public index: number , public name:string, public serial:number, public made_in :string, public fab_data:string, public price:number)
    {}
    getDescription(): string{

        return this.index +" "+ this.name +" "+ this.serial +" "+ this.made_in +" "+ this.fab_data +" "+ this.price;
    }
}
