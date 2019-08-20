function telephoneCheck(str) {

    let withHyphen = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    let justNumbers = /^[0-9]{10}$/
    let oneWithSpacesAndParenthese = /^1\s\(?[0-9]{3}\)?[\s-][0-9]{3}[\s-][0-9]{4}$/

    let optionalOne = /^1?\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/

    return (withHyphen.test(str) || justNumbers.test(str) || oneWithSpacesAndParenthese.test(str) || optionalOne.test(str))
}

telephoneCheck("555-555-5555");