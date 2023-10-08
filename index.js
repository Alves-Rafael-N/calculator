const addButton = document.querySelector(".add")
const subtractButton = document.querySelector(".subtract")
const divideButton = document.querySelector(".divide")
const multiplyButton = document.querySelector(".multiply")
const equalsButton = document.querySelector(".equals")
const pointButton = document.querySelector(".point")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const oneButton = document.querySelector(".one")
const twoButton = document.querySelector(".two")
const threeButton = document.querySelector(".three")
const fourButton = document.querySelector(".four")
const fiveButton = document.querySelector(".five")
const sixButton = document.querySelector(".six")
const sevenButton = document.querySelector(".seven")
const eightButton = document.querySelector(".eight")
const nineButton = document.querySelector(".nine")
const zeroButton = document.querySelector(".zero")
let numA= ''
let numB = ''
let operator = ''
let result
function operate() {
    const numAtoInt = parseInt(numA);
    const numBtoInt = parseInt(numB);
    if(result != undefined){
        if(operator === '+'){
            result = result + numBtoInt
            }
        else if(operator ==='-'){
            result = result - numBtoInt
            }
        else if(operator === '/'){
            result = result / numBtoInt
            }
        else{
            result = result * numBtoInt
            }
    }
    else{
        if(operator === '+'){
            result = numAtoInt + numBtoInt
            }
        else if(operator ==='-'){
            result = numAtoInt - numBtoInt
            }
        else if(operator === '/'){
            result = numAtoInt / numBtoInt
            }
        else{
            result = numAtoInt * numBtoInt
            }
    }
        return result;
}


























addButton.addEventListener('click',() => {
    operator = '+'
})
subtractButton.addEventListener('click',() => {
})
divideButton.addEventListener('click',() => {
})
multiplyButton.addEventListener('click',() => {
})
equalsButton.addEventListener('click', () =>{
    console.log(operate())
})


oneButton.addEventListener('click',() => {
    if(operator === '' || result != undefined){
        numA = numA + '1'
    }
    else{
        numB = numB + '1'
    }
})
twoButton.addEventListener('click',() => {
    if(operator === '' || result != undefined){
        numA = numA + '2'
    }
    else{
        numB = numB + '2'
    }
})
threeButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '3'
    }
    else{
        numB = numB + '3'
    }
})
fourButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '4'
    }
    else{
        numB = numB + '4'
    }
})
fiveButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '5'
    }
    else{
        numB = numB + '5'
    }
})
sixButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '6'
    }
    else{
        numB = numB + '6'
    }
})
sevenButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '7'
    }
    else{
        numB = numB + '7'
    }
})
eightButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '8'
    }
    else{
        numB = numB + '8'
    }
})
nineButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '9'
    }
    else{
        numB = numB + '9'
    }
})
zeroButton.addEventListener('click',() => {
    if(operator === ''){
        numA = numA + '0'
    }
    else{
        numB = numB + ''
    }
})
