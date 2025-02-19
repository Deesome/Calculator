
const expression = document.getElementById("expression")
const result = document.getElementById("result")
const acButton = document.querySelector(".AC")

const arthimaticOperators = []
const numbers = []
let currentValue = "";
let finalAns = 0




const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value

        // if (expression.innerText.length > 0) {
        //     acButton.innerText = "C"
        //     acButton.value = "C"

        //     if (value === "C") {
        //         remove()
        //     }


        // }
        
       if (value === "AC") {
            console.log("Here line 17")
            arthimaticOperators.length = 0
            numbers.length = 0
            currentValue = ""
            finalAns = 0
            expression.innerText = ""
            result.innerText = ""
            return
        }

        if (value === "=") {
            if (finalAns && !currentValue) {
                return
            } else {
                numbers.push(Number(currentValue))
                finalAns = calculation(numbers, arthimaticOperators)
                result.innerText = finalAns
                currentValue = 0
                numbers.length = 0
                arthimaticOperators.length = 0
                console.log("current Value", currentValue)
                console.log("finalAns", finalAns)
            }


        }

        if (['+', '-', 'x', "/", "%"].includes(value)) {
            if (finalAns && !currentValue) {
                numbers.push(Number(finalAns))
                expression.innerText = `${finalAns}${value}`
                finalAns = 0
                console.log(expression.innerText)
            } else {
                if (expression.innerText.length > 0) {
                    let lastChar = expression.innerText.slice(-1)
                    if (['+', '-', 'x', "/", "%"].includes(lastChar)) {
                        return
                    }

                }
                numbers.push(Number(currentValue))
                expression.innerText += value
            }
            arthimaticOperators.push(value)

            currentValue = 0
        } else if (value !== "=" && value !== "C") {

            currentValue += value
            
            expression.innerText += value

        }

        console.log("numbers", numbers)
        console.log("operators", arthimaticOperators)  //checked


    })
})

function calculation(numbers, operators) {
    const passedNumbers = [numbers[0]] // [2,4,42]
    const passedOperators = [] // [+,-]

    // number = [2+3*4]
    //Number = [2,4,6,7]
    //operators = [+,-,*]

    console.log("numbers", numbers)
    console.log("operators", operators)  //checked

    for (let i = 0; i < operators.length; i++) {
        let currentOperator = operators[i] // *
        let currentItem = numbers[i + 1] //7

        if (currentOperator === 'x') {
            console.log("entered this scope")  //checked
            //PassedNumbers[2] = 6 * 7
            passedNumbers[passedNumbers.length - 1] = passedNumbers[passedNumbers.length - 1] * currentItem

        } else if (currentOperator === '/') {
            passedNumbers[passedNumbers.length - 1] = passedNumbers[passedNumbers.length - 1] / currentItem
        } else if (currentOperator === '%') {
            passedNumbers[passedNumbers.length - 1] = passedNumbers[passedNumbers.length - 1] % currentItem
        } else {
            passedNumbers.push(currentItem)
            passedOperators.push(currentOperator)
        }
    }


    console.log(passedNumbers) // checked
    console.log(passedOperators)

    let result = passedNumbers[0]

    for (let i = 0; i < passedOperators.length; i++) {
        if (passedOperators[i] === "+") {
            result += passedNumbers[i + 1]
        } else if (passedOperators[i] === "-") {
            result -= passedNumbers[i + 1]
        }
    }

    return result
}














