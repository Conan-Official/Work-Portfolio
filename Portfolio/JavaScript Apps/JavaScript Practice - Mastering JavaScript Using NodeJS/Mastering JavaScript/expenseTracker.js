const account = {
    name: '',
    expenses: [], 
}

const addExpense = (array, description, amt) => {
    array.name = 'Conan';
    return array.expenses.push({
        description: description, 
        amount: amt, 
    })
}

const calculateExpenses = (account) => {
    let totalAmt = 0; 
    account.expenses.forEach(element => {
        totalAmt = totalAmt + element.amount; 
    });
   return `${account.name} has a total of $${totalAmt} worth of expenses`;
}

const accountSummary = (account) => {
    return `Name: ${account.name}, Expenses: ${account.expenses.map(item => (`${item.description} - Amount:$${item.amount}`))}`; 
}

addExpense(account, 'Food', 250); 
addExpense(account, 'Electricity', 200); 
console.log(accountSummary(account)); 
console.log(calculateExpenses(account)); 