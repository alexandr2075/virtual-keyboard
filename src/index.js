import './assets/styles/style.scss';

class KeyboardVirt {
  constructor() {
    this.keys = null;
    this.textarea = null;
    this.keyboard = null;
    this.key = [];
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.textarea.setAttribute('id', 'txtr');
    document.body.appendChild(this.textarea);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    document.body.appendChild(this.keyboard);

    this.keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

    this.keys.forEach((key) => {
      this.key = document.createElement('div');
      this.key.classList.add('key');
      this.key.setAttribute('data-about', `${key}`);
      switch (key) {
        case 'Backspace':
          this.key.classList.add('wide');
          this.key.textContent = key;
          break;
        default:
          this.key.textContent = key;
      }
      this.keyboard.appendChild(this.key);
    });
  }
}

const keybo = new KeyboardVirt();
keybo.init();

const keysElements = keybo.keyboard.querySelectorAll('.key');
keysElements.forEach((el) => {
  el.addEventListener('mousedown', () => {
    el.classList.add('activ');
  });
});
keysElements.forEach((el) => {
  el.addEventListener('mouseup', () => {
    el.classList.remove('activ');
  });
});
document.addEventListener('keydown', (event) => {
  keysElements.forEach((el) => {
    if (el.textContent === event.key) {
      el.classList.add('activ');
    }
  });
});
document.addEventListener('keyup', (event) => {
  keysElements.forEach((el) => {
    if (el.textContent === event.key) {
      el.classList.remove('activ');
    }
  });
});
console.log(document.getElementById('txtr').value);
