// # Algorithm

// - for each currency unit in CU array 
// - check is we can pay change in this unit
// - if so return object which contains
//     - remainder - amount to pay change after paying in unit
//     - amount of payed money
//     - name of unit
//     - times of unit
//     - isAbleToPay with true value
// - else 
//     - isAbleToPay with false value

// - if isAbleToPay then add name and amount to 'change' array 
const unitMap = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
]

// function gets name of unit 
// returns corresponding value
function unitValue(name) {
    //console.log('unitValue(name): ' + name)

    for (let i = 0; i < unitMap.length; i++) {

        //console.log('name: ' + name)
        //console.log('unitMap[i][0]: ' + unitMap[i][0])

        if (name == unitMap[i][0]) {
            return unitMap[i][1];
        }
    }
    console.log('unitValue return undefined')
    return undefined;
}

// function arguments:
// changeToPay
// unitName
// availableAmount
function checkCurrencyUnit(changeToPay, unitName, availableAmount) {

    let answer = {
        isAbleToPay: false,
    }
    //console.log('unitName: ' + unitName)
    if (0 == availableAmount) {
        answer = {
            isAbleToPay: true,
            name: unitName,
            amount: 0
        }
        return answer;
    }
    //console.log('unitValue(unitName): ' + unitValue(unitName))
    let unitTimes = Math.floor(changeToPay / unitValue(unitName))

    // if unit is more than amount or there is no available funds to pay
    if (0 == unitTimes) {
        return answer;
    }

    //console.log('able to pay')
    //console.log('availableAmount: ' + availableAmount)
    //console.log('unitTimes: ' + unitTimes)

    // else calculate amount of change to pay
    // all available (availableAmount) or just necessary
    let payAmount = Math.min(unitTimes * unitValue(unitName), availableAmount)

    answer = {
        isAbleToPay: true,
        name: unitName,
        amount: payAmount
    }

    return answer;
}

function checkCashRegister(price, cash, cid) {

    let reverseCID = cid.reverse();

    let haveSum = 0;

    for (let i = 0; i < cid.length; i++) {
        haveSum += cid[i][1];
    }

    let answer = {
        status: "OPEN",
        change: []
    }

    let changeToPay = cash - price;
    console.log('changeToPay: ' + changeToPay + "$");

    // status closed
    if (changeToPay == haveSum) {
        answer.status = "CLOSED"
    }

    // walk through all CU array
    for (let i = 0; i < unitMap.length; i++) {

        console.log('\niteration: ' + i)

        if (0 == changeToPay) {
            console.log('no change to pay, exit...')
            return answer;
        }

        //console.log('strange behaivor!!!: ' + cid[i][0] + " " + cid[i][1])
        console.log('checkCurrencyUnit arguments:')
        console.log('reverseCID[i][0]: ' + reverseCID[i][0])


        let result = checkCurrencyUnit(changeToPay, reverseCID[i][0], reverseCID[i][1]);

        console.log('checkCurrencyUnit result: ' + result)

        if (!result.isAbleToPay) {
            console.log('not able to pay, continue...')
            continue;
        }

        // else add result to <change> array

        answer.change.push([result.name, result.amount])

        changeToPay -= result.amount;
        changeToPay = changeToPay.toFixed(2)
        console.log('new changeToPay: ' + changeToPay + "$");

    }

    // if couldn't pay all change
    if (0 != changeToPay) {
        answer.status = "INSUFFICIENT_FUNDS";
        answer.change = []
    }

    if (answer.status == "CLOSED") {
        answer.change.reverse();
    }


    console.log('answer: ' + answer);

    return answer;
}

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])