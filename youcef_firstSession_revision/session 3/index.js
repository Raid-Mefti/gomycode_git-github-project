/* let expenses = []

function loadExpenses() {
    const storedExpenses = localStorage.getItem("expenses")
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses)
    } else {
        expenses = []
    }
}

function saveExpenses(){
    localStorage.setItem("expenses", JSON.stringify(expenses))
}



function addExpense(){
    const description = prompt("Veuillez introduire votre description")
    const amount = Number(prompt("Veuillez introduire le prix"))
    const category = prompt("Veuillez introduire votre catégorie")
    const date = prompt("Veuillez introduire votre date en format YYYY-MM-DD")

    expenses.push({description : description, amount : amount, category : category, date : date})

    saveExpenses()
    alert("Your item was added.")
}

function getTotalExpenses(){
    var totalAmount = 0;

    expenses.forEach( (exp) => totalAmount += Number(exp.amount))
    alert("Your total amount is : " +totalAmount);
    return totalAmount
}

function getExpensesByCategory(){
    const choice = prompt("Choisissez votre catégorie.")
    var newExpenses = expenses.filter((exp)=> {
        return exp.category == choice
    })
    console.log(newExpenses);
}


function getExpensesByCategory2(){
    const choice = prompt("Choisissez votre catégorie.")
    var newExpenses = []
        expenses.forEach( (exp) => {
            if(exp.category == choice){
                newExpenses.push(exp)
            }
    })
    console.log(newExpenses);
}
function getExpensesByCategory3(){
    const choice = prompt("Choisissez votre catégorie.")
    var newExpenses = []
    if(choice == "Drink"){
        expenses.forEach( (exp) => {
            if(exp.category == "Drink"){
                newExpenses.push(exp)
            }
    })
    }
    console.log(newExpenses);
}

function getExpensesByMonth(){
    const choice = prompt("Choisissez votre mois.")
    var newExpenses = []

    expenses.forEach((exp) => {
        if(exp.date.split("-")[1] == choice){
            newExpenses.push(exp)
        }
    })
    console.log(newExpenses);   
}

loadExpenses() */

let expenses = []

function loadExpenses(){

    if(localStorage.getItem("expenses"))
    expenses = JSON.parse(localStorage.getItem("expenses"))
    else{
        expenses = []
        console.log("hi");
    }
    console.log(expenses);
}

function saveExpenses(){
    localStorage.setItem("expenses", JSON.stringify(expenses))
}

function addExpenses(){
    const description = prompt("Describe your product.")
    const amount = Number(prompt("How much did it cost."))
    const category = prompt("Put the category.")
    const date = prompt("Date of patronage.")

    expenses.push({
        description : description,
        amount : amount,
        category : category,
        date : date
    })

    saveExpenses()
    alert("Your item was added.")
}

function getTotalExpenses(){
    let totalExpenses = 0
    
    JSON.parse(localStorage.getItem("expenses")).forEach(expense => {
        totalExpenses += Number(expense.amount)
    })

    alert("Your total amount is : " +totalExpenses);
    return totalExpenses
}
/*
function getTotalExpenses2(){
    var totalAmount = 0;

    expenses.forEach( (exp) => totalAmount += Number(exp.amount))
    alert("Your total amount is : " +totalAmount);
    return totalAmount
}
*/


function getExpensesByCategory(){
    const choice = prompt("Pick a category")
    var totalAmount = 0

    expenses.forEach((element) => {
        if(element.category == choice)
            totalAmount += element.amount
    })
    alert("Your total amount is : " +totalExpenses);
    return totalAmount
}

function getExpensesByMonth(){
    const choice = prompt("Pick a year and a month in the YYYY-MM format")
    var totalAmount = 0

    expenses.forEach((element) => {
        if(element.date.split("/")[1] == choice)
            totalAmount += element.amount
    })
    alert("Your total amount is : " +totalExpenses);
    return totalAmount
}

function findMostExpensiveExpense(){
    var mostExpensive = 0

    expenses.forEach((element) => {
        if(element.amount > mostExpensive)
            mostExpensive = element.amount
    })
    alert("Your most expensive item costs : " +mostExpensive);
    return mostExpensive
}

function generateExpenseReport3(){
    getTotalExpenses()
    let totalExpensesDrink = []
    let totalExpensesFood = []
    let totalAmountFood = 0
    let totalAmountDrink = 0
    
        totalExpensesDrink = expenses.filter(expense => expense.category == "Drink")
        totalExpensesFood = expenses.filter(expense => expense.category == "Food")

        totalExpensesDrink.forEach((element) => {
                totalAmountFood += element.amount
        })

        totalExpensesFood.forEach((element) => {
                totalAmountDrink += element.amount
        })
    
    alert(`Your expenses by category are :\n drink : ${totalExpensesDrink}\n
      food : ${totalExpensesFood}`)
}


function generateExpenseReport2(){
    getTotalExpenses()
    let totalExpensesDrink = []
    let totalExpensesFood = []
    let totalAmountFood = 0
    let totalAmountDrink = 0
    
        totalExpensesDrink = expenses.filter(expense => expense.category == "Drink")
        totalExpensesFood = expenses.filter(expense => expense.category == "Food")

        totalAmountFood = totalExpensesDrink.reduce((acc, cur) => acc + cur.amount, 0)
        totalAmountDrink = totalExpensesFood.reduce((acc, cur) => acc + cur.amount, 0)

    alert(`Your expenses by category are :
        Drinks : ${totalAmountDrink}
        Food : ${totalAmountFood}`)
}
function generateExpenseReport(){
    getTotalExpenses()
    let totalExpensesDrink = []
    let totalExpensesFood = []
    let totalAmountFood = 0
    let totalAmountDrink = 0

    const categories = expenses.map((expense) => {
        return expense.category
    })

    const categorySet =[... new Set(categories)]

    totalExpenses = categorySet.map((category)=> {
       // return {category : category, total : expenses.filter(expense => expense.category == category)}
        return `${category} : ${expenses.filter(expense => expense.category == category).reduce((acc, cur) => acc + cur.amount, 0)}`
    })
    console.log(totalExpenses);
}
/*
function deleteExpense(){
    const choice = prompt("Enter the description of the element you wish to delete (exemple : water)")
    let updatedExpenses = []

    updatedExpenses = expenses.filter(expense => expense.description != choice)
    
    expenses = updatedExpenses

    saveExpenses()

    alert(`The expense "${choice}" has been deleted.`);

}*/
function deleteExpense(){
    const choice = prompt("Enter the description of the element you wish to delete (exemple : water)")

    const index = expenses.findIndex(element => element.description === choice)
    
    if(index != -1){
        expenses.splice(index,1)
        saveExpenses()
        alert(`The expense "${choice}" has been deleted.`);
    }
    else
        alert(`No expense found with the description "${choice}".`);

}

function filterExpensesByRange(){
    const choiceMin = prompt("Enter the minimmum amount")
    const choiceMax = prompt("Enter the maximum amount")
    let filteredExpenses = []

    filteredExpenses = expenses.filter(expense => expense.amount <= choiceMax && expense.amount >= choiceMin)

    if(filteredExpenses.length == 0)
        alert(`No expenses found within the range $${choiceMin} - $${choiceMax}.`);
    else{

        alert(`The expenses within the range $${choiceMin} - $${choiceMax} are:\n${filteredExpenses}`);
    }
    console.log(filteredExpenses);
        
}
        

loadExpenses()


document.getElementById("expenseReport").addEventListener("click", () => {
    generateExpenseReport()

})


