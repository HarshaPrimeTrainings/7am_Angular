import { Demo } from "./Demo";


class Sample extends Demo{
 
mymethod(){
    console.log(this.address);
    
}

}

let s = new Sample();
s.mymethod();