// Not a number value to Number conversion function
function convertIntoNum(givenId) {
    const NaNvalue = document.getElementById(givenId);
    if (givenId.includes('display')) {
        const valueInNum = parseFloat(NaNvalue.innerText);
        return valueInNum;
    }

    else {
        const valueInNum = parseFloat(NaNvalue.value);
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