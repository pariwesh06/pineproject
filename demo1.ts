class User {
    // name: string;
    #age: number = 10; //private member
    private readonly dob?: Date;
    protected height: number = 171.9;
    protected constructor(name: string, age: number, dob?: Date) {
        this.name = name;
        this.#age = age;
        this.dob = dob;
    }
    set name(newName:string){
        if(!newName){
            throw new Error('newName is blank');
        }
        this.name=newName;
    }
    work() {
        console.log(this.name + ' is working');
        // this.dob = new Date();
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

const u1: User = new User('Pariwesh Gupta', 12);
u1.work();
const e1: User = new Employee('John', 34);
console.log(e1.name);
e1.work();
function add(x: number, y: number = 10, v?: number, ...restParam: number[]): number {
    const result = restParam.reduce((sum, value) => sum + value);
    console.log(result);
    return x + y + v + result;
}
// console.log(add(2,3,4,5,6,7,8));


let str: any = 1;
str = 'John';

let a = 1;  //implicit datatype, number
// let a:number;  //explicit datatype, number

a = 'John';
// console.log(a);

let isDone: boolean;
console.log(isDone);
let big: bigint;
let color1: string = 'red';
// console.log('Ram likes '+color+' color.');
console.log(`Ram likes ${color1} color.`); //template strings

//arrays
let list: number[] = [1, 2, 3];
// let list:Array<number> = [1,2,3];
//tuple
let x: [string, number]; //fixed size
x = ['hello', 10];
console.log(x[0]);
console.log(x[1]);
x[2] = true;

//Enums
enum Color {
    Red = 1, Green = 2, Blue = 4
}

let c: Color = Color.Green;
console.log(c)