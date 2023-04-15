
class BankAccount {

    // private variables starting with #
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.#balance = balance
        this.accountNumber = Date.now()
    }

    deposit(amount){
        this.#balance += amount
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    // private method
    #getBalance() {
        return this.#balance;
    }


    // getters and setters used as properties
    // public interface for modifying 
    get balance() {
        return this.#getBalance()
    }

    set balance(amount) {
        if(isNaN(amount)) {
            throw new Error("oo nahiooo nahioooo");
        }
        this.#balance = amount
    }
}


const ashutoshAccount = new BankAccount("Ashutosh D", 2000)
console.log(ashutoshAccount.balance)

ashutoshAccount.balance = "ashutosh"
console.log(ashutoshAccount.balance)