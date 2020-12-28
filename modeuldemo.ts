export abstract class Animal {
    protected abstract eat(): void;
    walk() {
        console.log('walking')
    }
}
export class Dog extends Animal {
    eat(): void {

    }
}
interface IAccount {
    withdraw(amount: number): number;
    getBalance(): number;
}

class BankAccount implements IAccount {
    private balance: number = 0;
    withdraw(amount: number): number {
        return 1;
    }
    getBalance(): number {
        return this.balance;
    }
}

function foo(){

}
export {foo as foo1}
const account: IAccount = new BankAccount();
console.log(account.getBalance())