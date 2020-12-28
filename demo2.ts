class User {
    name: string;
    #age: number = 10; //private member
    private readonly dob?: Date;
    protected height: number = 171.9;
    static count=10;
    protected constructor(name: string, age: number, dob?: Date) {
        this.name = name;
        this.#age = age;
        this.dob = dob;
    }
    // set name(newName:string){
    //     if(!newName){
    //         throw new Error('newName is blank');
    //     }
    //     this.name=newName;
    // }
    work() {
        console.log(this.name + ' is working');
        console.log(User.count); //will not work
        // this.dob = new Date();
    }
    static getCount(){
        console.log(User.count); //will not work
        return User.count;
    }
    eat() {
        console.log(this.#age);
    }
}
class Employee extends User {
    constructor(name: string, age: number) {
        super(name, age);
        console.log(this.height);
        //logic
    }
    work() {
        super.work();
        console.log(this.name + ' is working hard');
    }
}

// const u1: User = new User('Pariwesh Gupta', 12);
// u1.work();
const e1: User = new Employee('John', 34);
console.log(e1.name);
// e1.work();
console.log(User.getCount())


