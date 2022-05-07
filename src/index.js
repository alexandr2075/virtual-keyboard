import './assets/styles/style.scss';

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('autofocus', 'autofocus');
const element = document.createElement('div');
element.classList.add('first');

document.body.appendChild(textarea);
document.body.appendChild(element);

// const arr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 226, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

const arr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
// document.onkeydown = (event) => {
//   arr.push(event.key);
// };

let out = '';
for (let i = 0; i < arr.length; i += 1) {
  out += `<div class="keyboard" data="${arr[i]}">${arr[i]}</div>`;
}
element.innerHTML = out;

document.onkeydown = (event) => {
  document.querySelectorAll('.first .keyboard').forEach((el) => {
    el.classList.remove('active');
  });
  document.querySelector(`.first .keyboard[data="${event.key}"]`).classList.add('active');
};
document.onkeyup = () => {
  document.querySelectorAll('.first .keyboard').forEach((el) => {
    el.classList.remove('active');
  });
};

document.querySelectorAll('.first .keyboard').forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelectorAll('.first .keyboard').forEach((el) => {
      el.classList.remove('active');
    });
    elem.classList.add('active');
  });
});
