// TASK 1  - another solution

// Function 1 - addition

const sum = (component1, component2) => {
    let addComponents;
    if (typeof component1 === "number" && typeof component2 === "number") {
        addComponents = component1 + component2;
    } else {
        if (typeof component1 === "number" && typeof component2 === "undefined") {
            addComponents = component1;
        }
        else {
            if (typeof component1 !== "number" || typeof component2 !== "number") {
                addComponents = "invalid parameter";
            }
        }
    }
    return addComponents;
}

console.log(sum(2, null));
console.log(sum(7));
console.log(sum(2, "kot"));
console.log(sum("kot", 2));
console.log(sum("kot"));
console.log(sum(2, NaN)); 
