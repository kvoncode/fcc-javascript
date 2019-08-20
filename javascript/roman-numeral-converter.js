function ones(n) {
    switch (n) {
        case 0:
            return "";
        case 1:
            return "I";
        case 2:
            return "II"
        case 3:
            return "III"
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI"
        case 7:
            return "VII"
        case 8:
            return "VIII"
        case 9:
            return "IX"

    }
}

function tens(n) {
    switch (n) {
        case 0:
            return "";
        case 1:
            return "X";
        case 2:
            return "XX"
        case 3:
            return "XXX"
        case 4:
            return "XL"
        case 5:
            return "L"
        case 6:
            return "LX"
        case 7:
            return "LXX"
        case 8:
            return "LXXX"
        case 9:
            return "XC"

    }
}

function hundreds(n) {
    switch (n) {
        case 0:
            return "";
        case 1:
            return "C";
        case 2:
            return "CC"
        case 3:
            return "CCC"
        case 4:
            return "CD"
        case 5:
            return "D"
        case 6:
            return "DC"
        case 7:
            return "DCC"
        case 8:
            return "DCCC"
        case 9:
            return "CM"

    }
}
//character	numerical value
//I	1
//V	5
//X	10
//L	50
//C	100
//D	500
//M	1000
function thousands(n) {
    switch (n) {
        case 0:
            return "";
        case 1:
            return "M";
        case 2:
            return "MM"
        case 3:
            return "MMM"
        case 4:
            return ""
        case 5:
            return ""
        case 6:
            return ""
        case 7:
            return ""
        case 8:
            return ""
        case 9:
            return ""

    }
}

// fucntion receives callback
// it is apply this callback to number in range from 1 to 9
// and returns roman notation of number
// n - number
// callback - callback
function roman(n, callback) {
    let answer = callback(n);

    console.log('using roman:')
    console.log('n: ' + n)
    console.log('callback: ' + callback.name)

    return answer;
}

function convertToRoman(num) {
    let n = num;
    let answer = ""

    let remainder = n % 10
    answer = roman(remainder, ones) + answer;
    console.log('answer: ' + answer)

    n = Math.floor(n / 10)
    remainder = n % 10
    answer = roman(remainder, tens) + answer;
    console.log('answer: ' + answer)

    n = Math.floor(n / 10)
    remainder = n % 10
    answer = roman(remainder, hundreds) + answer;
    console.log('answer: ' + answer)

    n = Math.floor(n / 10)
    remainder = n % 10
    answer = roman(remainder, thousands) + answer;
    console.log('answer: ' + answer)
    return answer;
}

convertToRoman(10);