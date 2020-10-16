let comp = [];
let buffer = [];
window.addEventListener("load", () => {
  const numbers = document.querySelector(".numbers");
  const screen = document.querySelector("#output");

  numbers.addEventListener("click", (event) => {
    const number = event.target.value;
    if (number != 'undo') {
      buffer.push(number);
      display(buffer.join(""), 0);
    }
  });

  const funct = document.querySelector(".functions");

  funct.addEventListener("click", (event) => {
    console.log(event.target.value)
    buffer = [];
    comp = [];
    display("0", 0);
  });

  const operators = document.querySelector(".operators");

  operators.addEventListener("click", (event) => {
    const op = event.target.value;
    //
    if (op != "equ") {
      const num = parseFloat(buffer.join(""))
      comp.push(num)
      // clear buffer
      buffer = [];
      comp.push(op);
    }
    else {
      const num = parseFloat(buffer.join(''))
      comp.push(num)
      const result = eval(comp.join(''))
      buffer = []
      comp = []
      buffer.push(result)
      display(result, 0)
    }
    console.log(comp)
  });

  const del = document.querySelector('#delete')
  del.addEventListener('click', (event) => {
    // delete the buffer
    buffer = []
    display('0', 0)
  })
});

const display = (str, mode) => {
  
  output.value = str;
  
};

const calculate = (arr) => { };
