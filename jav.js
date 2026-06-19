const numberspad = document.querySelector(".numberspad")
const visualizer = document.querySelector(".visualizer")
const operators = document.querySelector(".operators")
let keypad = document.querySelectorAll("button")

let content = []
let nonnumbers = []
let operator_count = []

for (let operator of operators.children) {
    nonnumbers.push(operator.textContent)
};

function compute(operator) {
    let op_index = "";
    let result = 0;
    
    switch (operator) {
        case "+":
            op_index = content.indexOf("+");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 + num2;
            display(result);
            content.length = 0;
            return result;

        case "-":
            op_index = content.indexOf("-");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 - num2;
            display(result);
            content.length = 0;
            return result;

        case "×":
            op_index = content.indexOf("×");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 * num2;
            display(result);
            content.length = 0;
            return result;
        case "÷":
            op_index = content.indexOf("÷");
            num1 = +content.slice(0, op_index).join("");
            num2 = +content.slice(op_index+1).join("");

            result = num1 / num2;
            display(result);
            content.length = 0;
            return result;
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
    content.push(e.target.textContent);
    visualizer.textContent = content.join("");
    console.log(content)
})

operators.addEventListener('click', (e) => {
    if (e.target.textContent == "=") {
        console.log(operator_count);
        compute(operator_count.at(-1));
    } else {
    content.push(e.target.textContent);
    operator_count.push(e.target.textContent)
    visualizer.textContent = content.join("");
    console.log(content)
    }
    
})
