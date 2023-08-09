class Demo{
    userName:string = 'demouser';
    age:number = 25;
    isActive:boolean = true;

    greet():number{
        console.log('Hello');
    return this.age;
    }

}

let d = new Demo();

console.log(d.age);
console.log(d.userName);
console.log(d.isActive);
let temp  = d.greet();
console.log(temp);

