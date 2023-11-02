"use strict";
// let Name: string = "vishal";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance) {
        this.transactions = [];
        (this.accountNumber = accountNumber),
            (this.accountHolder = accountHolder),
            (this.balance = initialBalance);
    }
    logTransaction(type, amount) {
        const transaction = {
            type,
            amount,
            timestamp: new Date(),
        };
        this.transactions.push(transaction);
    }
    allTransaction() {
        return this.transactions;
    }
    deposit(amount) {
        this.balance += amount;
        this.logTransaction("Credited", amount);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficent Balance ");
        }
        else {
            this.balance -= amount;
            this.logTransaction("Debited", amount);
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
