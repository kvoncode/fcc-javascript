function palindrome(str) {

    let filtered = str.replace(/[,._)(\/-\s]/g, "")
    let lowercase = filtered.toLowerCase()

    let reversed = lowercase.split("").reverse().join("");

    console.log(reversed)

    return reversed === lowercase

}

palindrome("0_0 (: /-\ :) 0-0");