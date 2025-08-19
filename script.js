


        let firstNum = null;
        let currentOperation = null;
        const display = document.getElementById('display');
        
        function appendToDisplay(value) {
            display.value += value;
        }
        
        function clearDisplay() {
            display.value = '';
            firstNum = null;
            currentOperation = null;
        }
        
        function setOperation(op) {
            if (display.value !== '') {
                firstNum = parseFloat(display.value);
                currentOperation = op;
                display.value = '';
            }
        }
        
        function calculate() {
            if (firstNum !== null && currentOperation !== null && display.value !== '') {
                const secondNum = parseFloat(display.value);
                let result;
                
                switch (currentOperation) {
                    case '+':
                        result = firstNum + secondNum;
                        break;
                    case '-':
                        result = firstNum - secondNum;
                        break;
                    case '*':
                        result = firstNum * secondNum;
                        break;
                    case '/':
                        result = secondNum !== 0 ? firstNum / secondNum : 'Error';
                        break;
                    default:
                        return;
                }
                
                display.value = result.toString();
                firstNum = null;
                currentOperation = null;
            }
        }
