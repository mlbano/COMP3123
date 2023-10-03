//Exercise 1

console.log("\nExercise 1\n===========")

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("the quick brown fox"));

//Exercise 2

console.log("\nExercise 2\n===========")

function max(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

//Exercise 3

console.log("\nExercise 3\n===========")

function moveLastThreeToStart(inputString) {
    if (inputString.length >= 3) {
        const lastThreeCharacters = inputString.slice(-3);
        const remainingCharacters = inputString.slice(0, -3);
        return lastThreeCharacters + remainingCharacters;
    } else {
        return "String length must be greater or equal to three.";
    }
}

console.log(moveLastThreeToStart("Python"));
console.log(moveLastThreeToStart("JavaScript"));
console.log(moveLastThreeToStart("Hi"));

//Exercise 4

console.log("\nExercise 4\n===========")

function angle_Type(angle) {
    if (angle >= 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Error. Angle should be between 0 and 180 degrees.";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));