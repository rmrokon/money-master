// Not a number value to Number conversion function
function convertIntoNum(givenId) {
    const NaNvalue = document.getElementById(givenId);
    const valueInNum = parseFloat(NaNvalue.value);
    return valueInNum;
}

// calculating total expense
function calcTotalExpense() {
    const foodExpense = convertIntoNum('food-expense');
    const rentExpense = convertIntoNum('rent-expense');
    const clothesExpense = convertIntoNum('clothes-expense');

    const totalExpense = foodExpense + rentExpense + clothesExpense;
    return totalExpense;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = convertIntoNum('income');
    const totalExpense = calcTotalExpense();

    // Displaying total expense
    document.getElementById('display-total-expense').innerText = totalExpense;

    const balance = income - totalExpense;

    // Displaying total balance
    document.getElementById('display-total-balance').innerText = balance;
})