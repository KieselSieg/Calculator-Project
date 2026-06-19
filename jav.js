const numberspad = document.querySelector(".numberspad")
const visualizer = document.querySelector(".visualizer")
const operators = document.querySelector(".operators")
let keypad = document.querySelectorAll("button")

let content = []
let nonnumbers = []

for (let operator of operators.children) {
    nonnumbers.push(operator.textContent)
};

console.log(nonnumbers)

function compute(operator) {
    let op_index = "";
    
    switch (operator) {
        case "+":
            op_index = content.indexOf("+")
            num1 = +content.slice(0, op_index).join("")
            console.log(num1)
            num2 = +content.slice(op_index).join("")
            console.log(num2)

            console.log(num1 + num2)

        case "-":
            op_index = content.indexOf("-")
            num1 = +content.slice(0, op_index).join("")
            console.log(num1)
            num2 = +content.slice(op_index).join("")
            console.log(num2)

            console.log(num1 - num2)

        case "×":
            op_index = content.indexOf("×")
            num1 = +content.slice(0, op_index).join("")
            console.log(num1)
            num2 = +content.slice(op_index).join("")
            console.log(num2)

            console.log(num1 * num2)

    };
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
        compute(operator)
    } else {
    content.push(e.target.textContent);
    visualizer.textContent = content.join("");
    console.log(content)
    let operator = e.target.textContent
    }
    
})
