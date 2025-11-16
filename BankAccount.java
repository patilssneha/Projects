public class BankAccount {
    String accountHolderName; //account
    private double balance;

    public BankAccount(String accountHolderName, double balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    public String getAccountHolderName(){ //getter
        return accountHolderName;
    }

    public void setAccountHolderName(String accountHolderName){ //setter
        this.accountHolderName = accountHolderName;
    }
    public double getBalance(){ //getter balance
        return balance;
    }
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited; " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }}

    public void withdraw(double amount) {

        if (amount > 0){
        if (amount <= balance){
            balance -= amount;
            System.out.println("withdrawn:" + amount);
        }
        else {
            System.out.println("Insufficient balance!");
        }
        }else {
        System.out.println("Invalid withdrawal amount.");


    }
}
public void showBalance(){
    System.out.println("Current balance:" + balance );
}

    public void accountHolderName() {
        System.out.println("Account Name = Snehal");
    }
}