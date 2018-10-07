let myAccount = {
    name: 'Conan Mafnas', 
    expenses: 0, 
    income: 0, 
};

let calcExpense = (myAccount, expenseAmt) => {
   myAccount.expenses = myAccount.expenses + expenseAmt; 
   return myAccount; 
}

let myOtherAccount = myAccount; 

console.log(myAccount);
console.log(calcExpense(myOtherAccount, 10000)); 

let addIncome= (myAccount, amt) => {
    myAccount.income = myAccount.income + amt;
    return myAccount;  
}

let resetAccount = (myAccount) => {
    myAccount.income = 0; 
    myAccount.expenses = 0;
    return myAccount;  
}

let getAccountSummary = (myAccount) => {
    return (`Account Current Expenses ${myAccount.expenses}, Account Total Income ${myAccount.income} Account name ${myAccount.name}`); 
}



console.log(resetAccount(myOtherAccount)); 
console.log(addIncome(myOtherAccount, 10000000000)); 
console.log(getAccountSummary(myOtherAccount)); 

