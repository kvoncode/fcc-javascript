// c- character to convert
function rot13Replace(c) {
    let answer = ""
    let f = /[A-M]/
    let s = /[N-Z]/

    if (f.test(c)) {
        answer = String.fromCharCode(c.charCodeAt(0) + 13)
    } else if (s.test(c)) {
        answer = String.fromCharCode(c.charCodeAt(0) - 13)
    } else {
        answer = c;
    }

    console.log(answer)
    return answer;
}


function rot13(str) { // LBH QVQ VG!

    let answer = ""

    for (let i = 0; i < str.length; i++) {
        console.log('str[i]: ' + str[i])
        answer += rot13Replace(str[i])
    }

    console.log(answer)
    return answer;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");