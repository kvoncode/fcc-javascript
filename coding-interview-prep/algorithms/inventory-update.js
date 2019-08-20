'use strict'

// returns index of item or -1 if not found
function ifItemExist(array, itemName) {

    for (let i = 0; i < array.length; i++) {

        const element = array[i];
        if (element.includes(itemName)) {
            return i;
        }

    }
    return -1;
}

function sortItems(a, b) {
    if( a[1] < b[1]) {
        return -1;
    } else if (a[1] > b[1]) {
        return 1;
    }
    return 0;
}


/**
 * Non-mutator method
 * Returns merged and sorted array of items from 2 input arrays
 * @param {Array of Arrays} arr1
 * @param {Array of Arrays} arr2
 * @returns {Array of Arrays}
 */
function updateInventory(arr1, arr2) {

    // TODO ------------------------------------


    // TODO END ---------------------------------

    // 1. assign first array to the result array 
    let result = [...arr1];

    // 2. for each element in second array check if exists in first
    for (let i = 0; i < arr2.length; i++) {
        const itemName = arr2[i][1];

        const indexOfItem = ifItemExist(result, itemName);

        // if item not exists - add item
        if (-1 === indexOfItem) {
            result.push(arr2[i]);
        }
        // update number of existed elem
        else {
            result[indexOfItem][0] += arr2[i][0];
        }
    }

    result.sort(sortItems);


    // last. sort by Item alphabetical order 
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);