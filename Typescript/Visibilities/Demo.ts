export class Demo{

    public userid:number = 123;
    protected address:string = 'Hyd';
    private secret:string = 'mwssage';

    static temp:string = 'Hello There';

    static display(){
        console.log('Hello Iam Static');
    }

    private getConfidential(){
        console.log('Somethong');
    }

    public greet(){
        console.log(this.address);
        console.log('Hello Please WakeUp!!');
        console.log('Private '+ this.secret);
        this.getConfidential();
    }

    protected getSomething(){
        console.log('Protectred Method');
    }

}

console.log(Demo.temp);
Demo.display();
