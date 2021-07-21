const inpNum = document.querySelector("#inpNum");
const resultDis = document.querySelector("#result");
const buttonsGrid = document.querySelectorAll("#buttonsGrid");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
stringOfValues = [];


const add = function(n1, n2) {
	return n1+n2
};

const subtract = function(n1, n2) {
	return n1-n2
};

const multiply = function(n1, n2) {
  return n1*n2
};

const divide = function(n1, n2) {
  return n1/n2
};

function getResult(string) {
    let newString = [];
    let operation = '';
    let result = 0;
    for (i = 0; i < string.length; i++) {
        if (isNaN(string.charAt(i))) {
            switch (true) {
                case (string.charAt(i) === '.'):
                    newString.push('.');
                    break;
                case (string.charAt(i) === '+'):
                    operation = '+';
                    newString.push(' ');
                    break;
                case (string.charAt(i) === '-'):
                    operation = '-';
                    newString.push(' ');
                    break;      
                case (string.charAt(i) === '/'):
                    operation = '/';
                    newString.push(' ');
                    break;
                case (string.charAt(i) === '*'):
                    operation = '*';
                    newString.push(' ')
                    break;          
            }
        } else {
            newString.push(Number(string.charAt(i)));
        }
    }
    newString = newString.join('').split(' ');

    switch (true) {
        case (operation === '+'):
            result = add(Number(newString[0]), Number(newString[1]))
            break;
        case (operation === '-'):
            result = subtract(Number(newString[0]), Number(newString[1]))
            break;
        case (operation === '/'):
            result = divide(Number(newString[0]), Number(newString[1]))
            break;
        case (operation === '*'):
            result = multiply(Number(newString[0]), Number(newString[1]))
            break;
    }

    return result
}
    

buttonsGrid.forEach(buttonGrid => buttonGrid.addEventListener('click', (e) => {
    let value = (e.target.value);
    if (value === "=") {
        newPara = document.createElement('p');
        switch (true) {
            case (inpNum.firstChild.textContent[0] === '+'):
                stringOfValues.unshift(resultDis.firstChild.textContent);
                break;
            case (inpNum.firstChild.textContent[0] === '-'):
                stringOfValues.unshift(resultDis.firstChild.textContent);
                break;
            case (inpNum.firstChild.textContent[0] === '*'):
                stringOfValues.unshift(resultDis.firstChild.textContent);
                break;
            case (inpNum.firstChild.textContent[0] === '/'):
                stringOfValues.unshift(resultDis.firstChild.textContent);
                break;
        }
        newPara.textContent = getResult(stringOfValues.join(''));
        resultDis.appendChild(newPara);
        if (resultDis.childElementCount >= 2) {
            resultDis.removeChild(resultDis.firstChild);
        }
        stringOfValues = [];
        return
    }
    stringOfValues.push(value);
    let para = document.createElement('p');
    para.textContent = stringOfValues.join('');
    para.setAttribute("id", "valueDisplayed");
    inpNum.appendChild(para);
    if (inpNum.childElementCount >= 2) {
        inpNum.removeChild(inpNum.firstChild)
    }
}));


clear.addEventListener('click', () => {
    while (inpNum.firstChild) {
        inpNum.removeChild(inpNum.firstChild)
    }
    while (resultDis.firstChild) {
        resultDis.removeChild(resultDis.firstChild)
    }
    stringOfValues = [];
});

backspace.addEventListener('click', () => {
    if (inpNum.firstChild) {
        stringOfValues.pop()
    }
    stringOfValues.push(value);
    let para = document.createElement('p');
    para.textContent = stringOfValues.join('');
    para.setAttribute("id", "valueDisplayed");
    inpNum.appendChild(para);
    if (inpNum.childElementCount >= 2) {
        inpNum.removeChild(inpNum.firstChild)
    }
});