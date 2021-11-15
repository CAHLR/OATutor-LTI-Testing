var hints = [{id: "a6d0007exp17b-h1", type: "hint", dependencies: [], title: "Scientific Notation", text: "A number is written in scientific notation if it is written in the form $$a {\\left(10\\right)}^n$$, where 1<=|a|<10 and n is an integer.", variabilization: {}}, {id: "a6d0007exp17b-h2", type: "hint", dependencies: ["a6d0007exp17b-h1"], title: "Turning a Number Into Scientific Notation", text: "To write a number in scientific notation, move the decimal point to the right of the first digit in the number. Write the digits as a decimal number between 1 and 10. Count the number of places n that you moved the decimal point. Multiply the decimal number by 10 raised to a power of n. If you moved the decimal left as in a very large number, n is positive. If you moved the decimal right as in a small large number, n is negative.", variabilization: {}}, {id: "a6d0007exp17b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Left"], dependencies: ["a6d0007exp17b-h2"], title: "Moving the Decimal", text: "In which direction do you have to move the decimal for the number 1,000,000,000,000?", choices: ["Left", "Right"], variabilization: {}}, {id: "a6d0007exp17b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["a6d0007exp17b-h3"], title: "Moving the Decimal", text: "How many places to the left do you need to move the decimal for the number 1,000,000,000,000?", variabilization: {}}, ]; export {hints};