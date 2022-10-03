// Task 1

// Function 1- addition

const sum = (component1, component2) => {
    if (typeof component1 === "number" && typeof component2 === "number") {
        const addComponents = component1 + component2;
        return addComponents;

    } else {
        if (typeof component1 === "number" && typeof component2 === "undefined") {
            const add2Components = component1;
            return add2Components;
        }
        else {
            if (typeof component1 !== "number" || typeof component2 !== "number") {
                return "invalid parameter";
            }
        }
    }
}

console.log(sum(2, null));
console.log(sum(7));
console.log(sum(7,));
console.log(sum(2, "kot"));
console.log(sum("kot", 2));
console.log(sum("kot"));
console.log(sum(2, NaN)) 


// Funkction 2 - substraction

const difference = (minuend, substrahend) => {
    if (typeof minuend === "number" && typeof substrahend === "number") {
        const substract = minuend - substrahend;
        return substract;
    } else {
        if (typeof minuend === "number" && typeof substrahend === "undefined") {
            const substract2 = minuend;
            return substract2;
        } else {
            if (typeof minuend !== "number" || typeof substrahend !== "number") {
                return "invalid parameter";
            }
        }
    }
}

console.log(difference(10, 5));
console.log(difference(9));
console.log(difference(10,));
console.log(difference(10, "kot"));
console.log(difference("kot", 10));
console.log(difference("kot"));



// Function 3 - multiplication

const multiplication = (factor1, factor2) => {
    if (typeof factor1 === "number" && typeof factor2 === "number") {
        const product = factor1 * factor2;
        return product;
    } else {
        if (typeof factor1 === "number" && typeof factor2 === "undefined") {
            const product2 = factor1;
            return product2;
        } else {
            if (typeof factor1 !== "number" || typeof factor2 !== "number") {
                return "invalid parameter";
            }
        }
    }
}

console.log(multiplication(5, 5));
console.log(multiplication(5));
console.log(multiplication(7,));
console.log(multiplication("kot", 5));
console.log(multiplication(5, "kot"));
console.log(multiplication("kot"));



// function 4 - division

const division = (dividend, divisor) => {
    if (typeof dividend === "number" && typeof divisor === "number") {
        const quotient = dividend / divisor;
        return quotient;
    } else {
        if (typeof dividend === "number" && typeof divisor === "undefined") {
            const quotient2 = dividend;
            return quotient2;
        } else {
            if (typeof dividend !== "number" || typeof divisor !== "number") {
                return "invalid parameter";
            }
        }
    }
}

console.log(division(10, 5));
console.log(division(10));
console.log(division(10, "kot"));
console.log(division("kot"));






