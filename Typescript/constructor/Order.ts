import { Product } from "./Product";

class Order{

    prod:Product;
    oid:number;

    constructor(prd:Product,oid:number){
        this.prod = prd;
        this.oid=oid;
    }

    getOrderDetails(){
        console.log("Order Place with oid : "+ this.oid + " for Product "+ this.prod.pid + ":: " + this.prod.pname);
    }

}
let o = new Order(new Product(1,'Mobile'),1234);
o.getOrderDetails();