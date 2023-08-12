import { Demo } from "./Demo";

class Other{
    
    getDetails(){
        let d = new Demo();
        console.log('Other Class');
        console.log(d.userid);
        d.greet();
    }
}

let o = new Other();
o.getDetails();