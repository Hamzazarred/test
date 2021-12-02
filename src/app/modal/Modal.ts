export class User {
  id: number;
  username: string;
  password: string;
  address: string;
  admin: boolean;
  cardNumber: string;
  cvv: any;
  email: string;
  nameOnCard: string

}
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  pictureUrl: string;
}
export class Boutique {
  id:number;
  boutiquename : String ;
  pays : String ;
  device : String ;
  ville: String ;
  region : String ;
  numero:number= 0;
  nomdomaine:string
 constructor(

  boutiquename : String ,
  pays : String ,
  device : String ,
  ville: String ,
  region : String ,
  numero:number,
  nomdomaine:string
)
{this.pays=pays;
this.boutiquename=boutiquename;
this.device=device;
this.ville=ville;
this.region=region,
this.numero=numero,
this.nomdomaine=nomdomaine
}
 }
// export class category {
//   id: number;
//   name: string;
//   SCategorys: SCategory[];
//   link: Boolean ;
//     open: Boolean;
//   constructor(id: number, name: string,SCategorys: SCategory[]) {
//     this.id = id;
//     this.name = name;
//     this.link=false  ;
//     this.open= false;
//     this.SCategorys=SCategorys;
//   }
// }
export interface Category {
  id: number,
  name: string
  scategorys:SCategory[];
}
export interface menu {
  id: number,
  name: string
  SCategorys:SCategory[];
  open:false;
}

export interface SCategory {

  id: number,
  name: string;
 

}
export interface Comment {
  id: number,
  addedAt: any,
  addedBy: string,
  message: string,
  title: string
}
export interface ReplayComment {
  id: number,
  addedAt: any,
  addedBy: string,
  messageReplay: string
}
export interface Order {
  id: number,
  dateCreated: any,
  status: any
}
export class ProductOrder {
  id: number;
  product: Product;
  quantity: number = 1;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity ;
  }
}
export interface carts {
  cart: Cart[];
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
export interface Product {
  id: number,
  description: string,
  name: string,
  pictureUrl: string,
  price: number
  n:Boolean 
  s:Boolean 
  p:number
  newprice:number
  ref:string
}

export interface Slider {
  id: number,
  description: string,
  titre: string,
  width: number
  height: number
  image:string
}
export interface color {
  id: number,
  code: string,

}
export interface Taille {
  id: number,
  size: string,

}



export interface discription {
  id: number,
  title: string,
  message: string
}
export interface Tag {
  id: number,
  name: string,
  priorite:number,
  products:Product[],


}
export class Item {
  name: string;
  value: string;
  price: number;
}
export class UpdateProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
}
export const ITEMS: Item[] = [
  {
    name: 'TakAway  ',
    value: 'item_1',
    price: 1.99
  },
  {
    name: 'Relay  ',
    value: 'item_2',
    price: 2.99
  },
  {
    name: 'Express  ',
    value: 'item_3',
    price: 3.99
  },
  {
    name: 'Direct  ',
    value: 'item_4',
    price: 4.99
  }
];
