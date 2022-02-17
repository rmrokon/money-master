// Not a number value to Number conversion function
function convertIntoNum(givenId) {
    const targetElement = document.getElementById(givenId);
    const targetElementText = targetElement.innerText
    const targetElementValue = targetElement.value;


    if (givenId.includes('display')) {
        const valueInNum = parseFloat(targetElementText);
        return valueInNum;
    }

    else {
        const valueInNum = parseFloat(targetElementValue);
        return valueInNum;
    }

}

// calculating total expense
function calcTotalExpense() {
    const foodExpense = convertIntoNum('food-expense');
    const rentExpense = convertIntoNum('rent-expense');
    const clothesExpense = convertIntoNum('clothes-expense');

    const totalExpense = foodExpense + rentExpense + clothesExpense;
    return totalExpense;
}

//  Calculate Balance

function calcBalance() {
    const income = convertIntoNum('income');
    const totalExpense = calcTotalExpense();
    const balance = income - totalExpense;
    document.getElementById('display-total-expense').innerText = totalExpense;
    return balance;
}

// Calculate Saving

function calcSaving() {
    const givenSavingPercentage = convertIntoNum('savings');
    const currentBalance = calcBalance();
    const savings = currentBalance * (givenSavingPercentage / 100);
    return savings;
}

// Clear Fields Function to calculate again

function clearFields() {

    const inputField = '';
    for (const givenId of arguments) {

        if (givenId.includes('display')) {
            document.getElementById(givenId).innerText = inputField;
        }

        else {
            document.getElementById(givenId).value = inputField;
        }
    }
}

// Error Handling Part

function errorHandling() {
    for (const givenId of arguments) {
        document.getElementById(givenId).addEventListener('keyup', function () {
            const inputFieldInNum = convertIntoNum(givenId);
            if (inputFieldInNum <= 0) {
                alert('Please enter a positive number greater than 0');
                clearFields(givenId);
            }
            else if (isNaN(inputFieldInNum) == true) {
                alert('Please enter Number');
                clearFields(givenId);
            }
        })
    }
}

// Calculate Button Event Handler

document.getElementById('calculate-btn').addEventListener('click', function () {
    const balance = calcBalance();
    // Displaying total balance
    document.getElementById('display-total-balance').innerText = balance;
})

// Saving Button Event Handler
document.getElementById('savings-btn').addEventListener('click', function () {
    const savingAmount = calcSaving();
    const currentBalance = calcBalance();
    const remainingBalance = currentBalance - savingAmount;
    document.getElementById('display-total-savings').innerText = savingAmount;
    document.getElementById('display-total-remaining-balance').innerText = remainingBalance;
})

// Calculate Again Button Event Handler

document.getElementById('calculate-again-btn').addEventListener('click', function () {
    clearFields('income', 'food-expense', 'rent-expense', 'clothes-expense', 'savings');
    clearFields('display-total-expense', 'display-total-balance', 'display-total-savings', 'display-total-remaining-balance');
})

errorHandling('income', 'food-expense', 'rent-expense', 'clothes-expense', 'savings');

