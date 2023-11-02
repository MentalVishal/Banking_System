// let Name: string = "vishal";

interface Transaction {
  type: string;
  amount: number;
  timestamp: Date;
}

class BankAccount {
  accountNumber: string;
  accountHolder: string;
  balance: number;
  transactions: Transaction[] = [];

  constructor(
    accountNumber: string,
    accountHolder: string,
    initialBalance: number
  ) {
    (this.accountNumber = accountNumber),
      (this.accountHolder = accountHolder),
      (this.balance = initialBalance);
  }

  private logTransaction(type: string, amount: number): void {
    const transaction: Transaction = {
      type,
      amount,
      timestamp: new Date(),
    };
    this.transactions.push(transaction);
  }

  allTransaction() {
    return this.transactions;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.logTransaction("Credited", amount);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficent Balance ");
    } else {
      this.balance -= amount;
      this.logTransaction("Debited", amount);
    }
  }

  getBalance() {
    return this.balance;
  }
}

export { BankAccount, Transaction };
