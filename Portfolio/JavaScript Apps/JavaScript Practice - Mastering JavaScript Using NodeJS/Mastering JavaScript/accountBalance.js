const account = {
    name: 'Conan',
    expenses: [],
    income: [],
    addExpense(description, amt) {
        return this.expenses.push({
            description: description, 
            amount: amt, 
        })
    }, 
    addIncome(description, amt) {
        return this.income.push({
            description: description,
            amount: amt, 
        })
    },

    accountSummaryBalance() {
        let totalExpenses = 0; 
        let totalIncome = 0;  
            this.expenses.forEach(item => {
                totalExpenses = totalExpenses + item.amount; 
            });
            this.income.forEach(item => {
                totalIncome = totalIncome + item.amount; 
            })
        return `${this.name} has a total balance of $${totalIncome - totalExpenses}`;
    }, 

    deleteExpense(nameOfExpense) {
        const find = this.expenses.findIndex(item => {
            return item.description.toLowerCase() === nameOfExpense.toLowerCase(); 
        })
        if (find > -1) {
            this.expenses.splice(find, 1); 
            console.log(`The expense ${nameOfExpense} has been successfully removed`); 
        } else if (find === -1) {
            console.log(`Could not find ${nameOfExpense}`)
        }
    },

    listExpenses() {
        return expenses = this.expenses.map(item => {
            return `Expense: ${item.description}, Amount: $${item.amount}`; 
        })
    }
    
};


account.addExpense('Food', 250); 
account.addExpense('Electricity', 80); 
account.addExpense('Apartment', 2500);
account.addIncome('Company', 100000000000);
account.deleteExpense('food'); 
console.log(account.listExpenses());
console.log(account.expenses); 
console.log(account.accountSummaryBalance());
