import './assets/styles/css.css';
import './assets/styles/style.scss';

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
const element = document.createElement('div');
element.classList.add('first');

document.body.appendChild(textarea);
document.body.appendChild(element);

const arr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 226, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
// document.onkeydown = function (event) {
//   arr.push(event.keyCode);
//   console.log(arr);
// };
for (let i = 0; i < arr.length; i += 1) {
  element.innerHTML = '<div class="keyboard">arr[i]</div>';
}
