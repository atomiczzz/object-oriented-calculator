// !!!!! NO CODE ABOVE THIS LINE !!!!!!
class Calculator {
  constructor (containerElId) {
    var calc = document.getElementById(containerElId)
    // var el2 = document.getElementById('calc2Container')
    // var el3 = document.getElementById('calc3Container')
    // var el4 = document.getElementById('calc4Container')
    // var el5 = document.getElementById('calc5Container')
    calc.innerHTML = this.newCalc()
    this.containerElId = containerElId
    this.stateLock = false

    this.log()
  }

  log () {
    console.log('calc created')
  }

  press (integer) {
    if (typeof this.integer === 'number' && this.stateLock === false) {
      return parseInt(this.integer)
    }
    return
  }

  value (a, b, op) {
    if (op === '+') {
      return a + b
    } else if (op === '-') {
      return a - b
    } else if (op === '/') {
      return a / b
    } else if (op === '*') {
      return a * b
    }
    if (this.display === '') {
      return null
    }
  }

  lock () {
    if (this.stateLock === false) {
      this.stateLock = true
    }
  }
  unlock () {
    if (this.stateLock === true) {
      this.stateLock = false
    }
  }
  newCalc () {
    return `<form class="calculator_form">
         <div class="calculator_row">
             <div class="calc_display" id="display"></div>
         </div>
         <div class="calculator_row">
             <button type="button" class = 'calc_button' value="c" id="clear" data-num="clear">c</button>
             <button type="button" class = 'calc_button' value="<--" id="backspace" data-num="back">back</button>
             <button type="button" class = 'calc_button' value="^3" id="power" data-num="power"></button>
             <button type="button" class = 'op_button' value="+" id="plusButton" data-num="+">+</button>
         </div>
         <div class="calculator_row">
             <button type="button" class = 'calc_button' value="9" id="nineButton" data-num="9">9</button>
             <button type="button" class = 'calc_button' value="8" id="eightButton" data-num="8">8</button>
             <button type="button" class = 'calc_button' value="7" id="sevenButton" data-num="7">7</button>
             <button type="button" class = 'op_button' value="-" id="minusButton" data-num="-">-</button>
         </div>
         <div class="calculator_row">
             <button type="button" class = 'calc_button' value="6" id="sixButton" data-num="6">6</button>
             <button type="button" class = 'calc_button' value="5" id="fiveButton" data-num="5">5</button>
             <button type="button" class = 'calc_button' value="4" id="fourButton" data-num="4">4</button>
             <button type="button" class = 'op_button' value="*" id="multiplyButton" data-num="*">*</button>
         </div>
         <div class="calculator_row">
             <button type="button" class = 'calc_button' value="3" id="threeButton" data-num="3">3</button>
             <button type="button" class = 'calc_button' value="2" id="twoButton" data-num="2">2</button>
             <button type="button" class = 'calc_button' value="1" id="oneButton" data-num="1">1</button>
             <button type="button" class = 'op_button' value="/" id="divideButton" data-num="/">/</button>
         </div>
         <div clas="calculator_row">
             <button type="button" class = 'calc_button' value="0" id="zeroButton" data-num="0">0</button>
             <button type="button" class = 'calc_button' value="." id="decimalButton" data-num=".">.</button>
             <button type="button" class = 'op_button' value="=" id="equal" data-num="=">=</button>
         </div>
     </form>`
  }
  // Your code goes here
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
