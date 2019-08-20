'use strict'

/**
 *
 *
 * @param {Set} first
 * @param {Set} second
 * @returns {Set}
 */
function symDiffOfTwoSets(first, second) {
    console.group("symDiffOfTwoSets()")

    console.log('TCL: symDiffOfTwoSets -> first', first)
    console.log('TCL: symDiffOfTwoSets -> second', second)

    let answer = new Set(first);

    for (const elem of second) {
        if (answer.has(elem)) {
            answer.delete(elem);
        } else {
            answer.add(elem);
        }
    }

    console.log('TCL: symDiffOfTwoSets -> answer', answer)
    console.groupEnd();
    return answer;
}


/**
 *
 *
 * @param {Array of Array[number]} args
 * @returns {Array}
 */
function sym(...args) {
    console.log('TCL: sym -> args', args)

    if (2 > args.length) {
        console.error("Can't compare symmetric difference of", args.length, "sets")
        return undefined;
    }

    let answer = new Set(args[0]);
    console.log('TCL: sym -> answer', answer)

    // Number of sets: args.length 
    // Number of operation: args.length - 1
    for (let i = 1; i < args.length; i++) {

        answer = symDiffOfTwoSets(answer, new Set(args[i]));

    }


    return Array.from(answer);
}

sym([1, 2, 3], [5, 2, 1, 4, 5])