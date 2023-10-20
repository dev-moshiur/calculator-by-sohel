const numbersContainer = document.getElementById("numbers");
const valueInputContainer = document.getElementById("valueInputContainer");
const operators = document.getElementById("operators");
const second = document.getElementById("second");
const resultContainer = document.getElementById("resultContainer");

const leftvalus = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let operatorentered = false;
const valueInput = (val) => {
  if (operatorentered) {
    second.innerHTML = second.innerHTML + val;
  } else {
    valueInputContainer.innerHTML += val;
  }
  getResult();
};

const getResult = () => {
  if (operatorentered && second.innerHTML.length) {
    const finalValue = eval(
      `${valueInputContainer.innerHTML}${operators.innerHTML}${second.innerHTML}`,
    ).toFixed(2);
    resultContainer.innerHTML = finalValue ? finalValue : "";
  }
};

leftvalus.forEach((elm) => {
  numbersContainer.innerHTML += `<div onclick='valueInput(${elm})' class='number' >${elm}</div>`;
});

const slicing = () => {
  if (operatorentered) {
    second.innerHTML = second.innerHTML.slice(0, -1);
    if (!second.innerHTML.length) {
      resultContainer.innerHTML = "";
    }
  } else {
    valueInputContainer.innerHTML = valueInputContainer.innerHTML.slice(0, -1);
  }
  getResult();
};

const addPerator = (val) => {
  if (!operatorentered) {
    operators.innerHTML = val;
  }
//   operatorentered = true;
  if(resultContainer.innerHTML.length){
    valueInputContainer.innerHTML = resultContainer.innerHTML
    resultContainer.innerHTML = ''
    second.innerHTML = ''
    operators.innerHTML = val;
    getResult()

  }
  operatorentered = true;
};

const cleared = () => {
  valueInputContainer.innerHTML = "";
  operators.innerHTML = "";
  second.innerHTML = "";
  resultContainer.innerHTML = "";
  operatorentered = false;
};

const modeToggle = ()=> {

    document.body.classList.toggle('nightMode')
    document.getElementById('mode').classList.toggle('night')
}
