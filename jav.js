const numberspad = document.querySelector(".numberspad")
const visualizer = document.querySelector(".visualizer")
const operators = document.querySelector(".operators")
let keypad = document.querySelectorAll("button")

let content = []
let nonnumbers = []
let op_count = []

for (let operator of operators.children) {
    nonnumbers.push(operator.textContent)
};

function compute(operator) {
    let op_index = "";
    let result = 0;
    
    switch (operator) {
        case "+":
            op_index = content.lastIndexOf("+");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 + num2;
            display(result);
            content.length = 0;
            return result;

        case "-":
            op_index = content.lastIndexOf("-");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 - num2;
            display(result);
            content.length = 0;
            return result;

        case "×":
            op_index = content.lastIndexOf("×");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 * num2;
            display(result);
            content.length = 0;
            return result;
        case "÷":
            op_index = content.lastIndexOf("÷");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 / num2;
            display(result);
            content.length = 0;
            return result;
        case "C":
            op_count.length = 0;
            content.length = 0;
            visualizer.textContent = "Expressions/values will be displayed here"
            break;
    };
};

function display(content) {
    visualizer.textContent = content
};

keypad.forEach((key) => {
    let class_name = "class-" + key.textContent;
    key.classList.add(class_name);
});


numberspad.addEventListener('click', (e) => {
    if (e.target.tagName !== "BUTTON") return;

    content.push(e.target.textContent);
    visualizer.textContent = content.join("");
    console.log(content);
});

operators.addEventListener('click', (e) => {
    if (e.target.tagName !== "BUTTON") return;

    if (op_count.length <= 0){
        if (e.target.textContent == "=") {
            console.log(op_count);
            compute(op_count.at(-1));
            op_count = []
        } else if (e.target.textContent == "C"){
            compute("C")
        } else {
            content.push(e.target.textContent);
            op_count.push(e.target.textContent)
            visualizer.textContent = content.join("");
            console.log(content)
        }
    } else {
        if (e.target.textContent == "=") {
            console.log(op_count);
            compute(op_count.at(-1));
            op_count = []

        } else if (e.target.textContent === "C"){
            compute("C")
        } else {
            content.push(String(compute(op_count.at(-1))))
            op_count.push(e.target.textContent);
            content.push(e.target.textContent);
            visualizer.textContent = content.join("");
        }
    }
})
