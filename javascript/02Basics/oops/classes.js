// under the hood, things work as shown in obj.js

class BankAccount {

    type= "example"

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.balance = balance
        this.accountNumber = Date.now()
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const person1 = new BankAccount("Ashutosh", 1000)
person1.type = "new"
console.log(person1)
const person2 = new BankAccount("Dhondkar", 20)
console.log(person2)
// console.log(person1)
// person1.deposit(20)
// console.log(person1.balance)