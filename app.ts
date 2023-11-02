import { BankAccount } from "./bank";

const account = new BankAccount("12345", "Vishal Kumar", 980000);

console.log("Your Current Account Balance is :-", account.getBalance());

account.deposit(25000);
console.log("Balance after deposit:", account.getBalance());

account.withdraw(80000);
console.log("Balance after withdrawal:", account.getBalance());

account.withdraw(800000000000);

console.log(account.allTransaction());
