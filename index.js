const createVirtualKeyboard = () => {
  const divContainer = document.createElement("div");
  divContainer.classList.add("container");
  // Поле заголовка с текстом
  const txtTitle = document.createElement("h1");
  txtTitle.classList.add("text-title");
  txtTitle.innerText = "Виртуальная клавиатура (RSS/TBM)";
  divContainer.appendChild(txtTitle);
  // Область ввода текста
  const txtArea = document.createElement("textarea");
  txtArea.classList.add("text-area");
  txtArea.setAttribute("id", "kinput");
  divContainer.appendChild(txtArea);

  // Клавиатура
  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");

  let rowKeyboard;
  // 1-я строка клавиатуры
  rowKeyboard = document.createElement("div");
  rowKeyboard.classList.add("row-keyboard");
  rowKeyboard.appendChild(createBtn("Backquote", "simple", "ё", "Ё", "`", "~"));
  rowKeyboard.appendChild(createBtn("Digit1", "simple", "1", "!", "1", "!"));
  rowKeyboard.appendChild(createBtn("Digit2", "simple", "2", "\"", "2", "@"));
  rowKeyboard.appendChild(createBtn("Digit3", "simple", "3", "№", "3", "#"));
  rowKeyboard.appendChild(createBtn("Digit4", "simple", "4", ";", "4", "$"));
  rowKeyboard.appendChild(createBtn("Digit5", "simple", "5", "%", "5", "%"));
  rowKeyboard.appendChild(createBtn("Digit6", "simple", "6", ":", "6", "^"));
  rowKeyboard.appendChild(createBtn("Digit7", "simple", "7", "?", "7", "&"));
  rowKeyboard.appendChild(createBtn("Digit8", "simple", "8", "*", "8", "*"));
  rowKeyboard.appendChild(createBtn("Digit9", "simple", "9", "(", "9", "("));
  rowKeyboard.appendChild(createBtn("Digit0", "simple", "0", ")", "0", ")"));
  rowKeyboard.appendChild(createBtn("Minus", "simple", "-", "_", "-", "_"));
  rowKeyboard.appendChild(createBtn("Equal", "simple", "=", "+", "=", "+"));
  rowKeyboard.appendChild(
    createBtn(
      "Backspace",
      "special",
      "Backspace",
      "Backspace",
      "Backspace",
      "Backspace"
    )
  );
  keyboard.appendChild(rowKeyboard);

  // 2-я строка клавиатуры
  rowKeyboard = document.createElement("div");
  rowKeyboard.classList.add("row-keyboard");
  rowKeyboard.appendChild(
    createBtn("Tab", "special", "Tab", "Tab", "Tab", "Tab")
  );
  rowKeyboard.appendChild(createBtn("KeyQ", "simple", "й", "Й", "q", "Q"));
  rowKeyboard.appendChild(createBtn("KeyW", "simple", "ц", "Ц", "w", "W"));
  rowKeyboard.appendChild(createBtn("KeyE", "simple", "у", "У", "e", "E"));
  rowKeyboard.appendChild(createBtn("KeyR", "simple", "к", "К", "r", "R"));
  rowKeyboard.appendChild(createBtn("KeyT", "simple", "е", "Е", "t", "T"));
  rowKeyboard.appendChild(createBtn("KeyY", "simple", "н", "Н", "y", "Y"));
  rowKeyboard.appendChild(createBtn("KeyU", "simple", "г", "Г", "u", "U"));
  rowKeyboard.appendChild(createBtn("KeyI", "simple", "ш", "Ш", "i", "I"));
  rowKeyboard.appendChild(createBtn("KeyO", "simple", "щ", "Щ", "o", "O"));
  rowKeyboard.appendChild(createBtn("KeyP", "simple", "з", "З", "p", "P"));
  rowKeyboard.appendChild(
    createBtn("BracketLeft", "simple", "х", "Х", "[", "{")
  );
  rowKeyboard.appendChild(
    createBtn("BracketRight", "simple", "ъ", "Ъ", "]", "}")
  );
  rowKeyboard.appendChild(
    createBtn("Backslash", "simple", "\\", "/", "\\", "|")
  );
  rowKeyboard.appendChild(
    createBtn("Delete", "special", "Del", "Del", "Del", "Del")
  );
  keyboard.appendChild(rowKeyboard);

  // 3-я строка клавиатуры
  rowKeyboard = document.createElement("div");
  rowKeyboard.classList.add("row-keyboard");
  rowKeyboard.appendChild(
    createBtn(
      "CapsLock",
      "special",
      "Caps Lock",
      "Caps Lock",
      "Caps Lock",
      "Caps Lock"
    )
  );
  rowKeyboard.appendChild(createBtn("KeyA", "simple", "ф", "Ф", "a", "A"));
  rowKeyboard.appendChild(createBtn("KeyS", "simple", "ы", "Ы", "s", "S"));
  rowKeyboard.appendChild(createBtn("KeyD", "simple", "в", "В", "d", "D"));
  rowKeyboard.appendChild(createBtn("KeyF", "simple", "а", "А", "f", "F"));
  rowKeyboard.appendChild(createBtn("KeyG", "simple", "п", "П", "g", "G"));
  rowKeyboard.appendChild(createBtn("KeyH", "simple", "р", "Р", "h", "H"));
  rowKeyboard.appendChild(createBtn("KeyJ", "simple", "о", "О", "j", "J"));
  rowKeyboard.appendChild(createBtn("KeyK", "simple", "л", "Л", "k", "K"));
  rowKeyboard.appendChild(createBtn("KeyL", "simple", "д", "Д", "l", "L"));
  rowKeyboard.appendChild(createBtn("Semicolon", "simple", "ж", "Ж", ";", ":"));
  rowKeyboard.appendChild(createBtn("Quote", "simple", "э", "Э", "'", "\""));
  rowKeyboard.appendChild(
    createBtn("Enter", "special", "Enter", "Enter", "Enter", "Enter")
  );
  keyboard.appendChild(rowKeyboard);

  // 4-я строка клавиатуры
  rowKeyboard = document.createElement("div");
  rowKeyboard.classList.add("row-keyboard");
  rowKeyboard.appendChild(
    createBtn("ShiftLeft", "special", "Shift", "Shift", "Shift", "Shift")
  );
  rowKeyboard.appendChild(
    createBtn("Backslash", "simple", "\\", "/", "\\", "|")
  );
  rowKeyboard.appendChild(createBtn("KeyZ", "simple", "я", "Я", "z", "Z"));
  rowKeyboard.appendChild(createBtn("KeyX", "simple", "ч", "Ч", "x", "X"));
  rowKeyboard.appendChild(createBtn("KeyC", "simple", "с", "С", "c", "C"));
  rowKeyboard.appendChild(createBtn("KeyV", "simple", "м", "М", "v", "V"));
  rowKeyboard.appendChild(createBtn("KeyB", "simple", "и", "И", "b", "B"));
  rowKeyboard.appendChild(createBtn("KeyN", "simple", "т", "Т", "n", "N"));
  rowKeyboard.appendChild(createBtn("KeyM", "simple", "ь", "Ь", "m", "M"));
  rowKeyboard.appendChild(
    createBtn("Comma", "simple", "б", "Б", ",", "<")
  );
  rowKeyboard.appendChild(createBtn("Period", "simple", "ю", "Ю", ".", ">"));
  rowKeyboard.appendChild(createBtn("Slash", "simple", ".", ",", "/", "?"));
  rowKeyboard.appendChild(createBtn("ArrowUp", "special", "▲", "▲", "▲", "▲"));
  rowKeyboard.appendChild(
    createBtn("ShiftRight", "special", "Shift", "Shift", "Shift", "Shift")
  );
  keyboard.appendChild(rowKeyboard);

  // 5-я строка клавиатуры
  rowKeyboard = document.createElement("div");
  rowKeyboard.classList.add("row-keyboard");
  rowKeyboard.appendChild(
    createBtn("ControlLeft", "special", "Ctrl", "Ctrl", "Ctrl", "Ctrl")
  );
  rowKeyboard.appendChild(
    createBtn("MetaLeft", "special", "Win", "Win", "Win", "Win")
  );
  rowKeyboard.appendChild(
    createBtn("AltLeft", "special", "Alt", "Alt", "Alt", "Alt")
  );
  rowKeyboard.appendChild(createBtn("Space", "special", " ", " ", " ", " "));
  rowKeyboard.appendChild(
    createBtn("AltRight", "special", "Alt", "Alt", "Alt", "Alt")
  );
  rowKeyboard.appendChild(
    createBtn("ControlRight", "special", "Ctrl", "Ctrl", "Ctrl", "Ctrl")
  );
  rowKeyboard.appendChild(
    createBtn("ArrowLeft", "special", "◄", "◄", "◄", "◄")
  );
  rowKeyboard.appendChild(
    createBtn("ArrowDown", "special", "▼", "▼", "▼", "▼")
  );
  rowKeyboard.appendChild(
    createBtn("ArrowRight", "special", "►", "►", "►", "►")
  );
  keyboard.appendChild(rowKeyboard);

  divContainer.appendChild(keyboard);
  // Поле описания
  const txtDescription = document.createElement("div");
  txtDescription.classList.add("text-description");
  txtDescription.innerHTML =
    "<br />Клавиатура создана в операционной системе Windows";
  divContainer.appendChild(txtDescription);

  // Поле информации о переключении языка
  const txtLanguage = document.createElement("div");
  txtLanguage.classList.add("text-language");
  txtLanguage.innerHTML =
    "<br />Для переключения языка комбинация: левыe ctrl + alt";
  divContainer.appendChild(txtLanguage);
  document.body.append(divContainer);
  return divContainer;
};

const createBtn = (nameBtn, type, rusLower, rusUpper, engLower, engUpper) => {
  let btnKeyboard;
  let letterBtn;
  btnKeyboard = document.createElement("div");
  btnKeyboard.classList.add("key", nameBtn, type);
  btnKeyboard.setAttribute("data-key", nameBtn);
  letterBtn = document.createElement("span");
  letterBtn.classList.add("rus", "lowercase", "hidden");
  letterBtn.innerText = rusLower;
  btnKeyboard.appendChild(letterBtn);
  letterBtn = document.createElement("span");
  letterBtn.classList.add("rus", "uppercase", "hidden");
  letterBtn.innerText = rusUpper;
  btnKeyboard.appendChild(letterBtn);
  letterBtn = document.createElement("span");
  letterBtn.classList.add("eng", "lowercase");
  letterBtn.innerText = engLower;
  btnKeyboard.appendChild(letterBtn);
  letterBtn = document.createElement("span");
  letterBtn.classList.add("eng", "uppercase", "hidden");
  letterBtn.innerText = engUpper;
  btnKeyboard.appendChild(letterBtn);
  return btnKeyboard;
};

createVirtualKeyboard();

// ----------- Обработка событий ----------------
//kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

const KINPUT = document.querySelector("#kinput");
const KEY_CAPSLOCK = document.querySelector(".CapsLock");
const KEYBOARD = document.querySelector(".keyboard");
const KEY_ARRAY = document.querySelectorAll("span");

// let stateShiftKey = false;
// let stateCtrlKey = false;
// let stateAltKey = false;
// let stateMetaKey = false;
let stateCapsLock = false;
let stateLng = false;
let stateUpper = false;

KEYBOARD.addEventListener("mousedown", clickDownKey);
KEYBOARD.addEventListener("mouseup", clickUpKey);

KINPUT.focus();

KINPUT.onkeyup = function (e) {
  let reset = false;

  if (!e.shiftKey) {
    stateUpper = false;    
    reset = true;
  }
  e.preventDefault();
  if (reset) switchKeyboard();
  KINPUT.focus();
};

KINPUT.onkeydown = function (e) {
  let reset = false;
  if (!e.repeat) {
    if (e.ctrlKey && e.altKey) {
      stateLng = !stateLng;  
      setLocalStorage();
      reset = true;
    }
    if (e.shiftKey) {
      stateUpper = true;      
      reset = true;
    }
    clickBtn(e.code);
    e.preventDefault();
    if (reset) switchKeyboard();
  }
  KINPUT.focus();
};

KINPUT.addEventListener("keyup", function (e) {
  let reset = false;
  
  if (e.getModifierState("CapsLock") !== stateCapsLock) {
    stateCapsLock = !stateCapsLock;  
    reset = true;
  }
  if (reset) switchKeyboard();
  KINPUT.focus();
});

function clickDownKey(event) {
  if (event.target.closest(".key")) {
    let keyBtn = event.target.closest(".key");
    //event.target.closest('.key').classList.add("active");
    putBtn(keyBtn);
    
  }
  KINPUT.focus();
}

function clickUpKey(event) {
    if (event.target.closest(".key")) {
      stateUpper = false;
      event.target.closest(".key").classList.remove("animate");
      switchKeyboard();
    }
    KINPUT.focus();
  }

function switchKeyboard() {
  let stateUpp =
    (!stateUpper && stateCapsLock) || (stateUpper && !stateCapsLock);
  
  for (var item of KEY_ARRAY) {
  
    if (
      item.classList.contains("eng") &&
      item.classList.contains("lowercase")
    ) {
      if (!stateLng && !stateUpp) {
        item.classList.remove("hidden");  
      } else item.classList.add("hidden");
    }
    if (
      item.classList.contains("eng") &&
      item.classList.contains("uppercase")
    ) {
      if (!stateLng && stateUpp) {
        item.classList.remove("hidden");        
      } else item.classList.add("hidden");
    }
    if (
      item.classList.contains("rus") &&
      item.classList.contains("lowercase")
    ) {
      if (stateLng && !stateUpp) {
        item.classList.remove("hidden");
      } else item.classList.add("hidden");
    }
    if (
      item.classList.contains("rus") &&
      item.classList.contains("uppercase")
    ) {
      if (stateLng && stateUpp) {
        item.classList.remove("hidden");
      } else item.classList.add("hidden");
    }
  }
  if (stateCapsLock) KEY_CAPSLOCK.classList.add("active");
  else KEY_CAPSLOCK.classList.remove("active");
}

function clickBtn(codeKey) {
  for (var item of KEY_ARRAY) {
    if (item.closest(".key").dataset.key === codeKey) {
      if (!item.classList.contains("hidden")) {
        putBtn(item.closest(".key"));
      }
    }
  }
}

function putBtn(keyBtn) {
  let reset = false;
  keyBtn.classList.add("animate");
  setTimeout(() => keyBtn.classList.remove("animate"), 300);
  if (keyBtn.classList.contains("simple")) insertAtArea(keyBtn.innerText);
  else {
    switch (keyBtn.dataset.key) {
      case "Tab":
        {
          insertAtArea("  ");
        }
        break;
      case "Space":
        {
          insertAtArea(" ");
        }
        break;
      case "Enter":
        {
          insertAtArea("\n");
        }
        break;
      case "CapsLock":
        {
          keyBtn.classList.toggle("active");
          stateCapsLock = !stateCapsLock;
          reset = true;
        }
        break;
      case "ShiftLeft":
      case "ShiftRight":
        {
          //keyBtn.classList.toggle("active");
          stateUpper = true;
          reset = true;
        }
        break;
      case "Backspace":
        {
          delAtArea(0);
        }
        break;
      case "Delete":
        {
          delAtArea(1);
        }
        break;
      case "ArrowUp":
        {
          arrowAtArea(0);
        }
        break;
      case "ArrowLeft":
        {
          arrowAtArea(1);
        }
        break;
      case "ArrowRight":
        {
          arrowAtArea(2);
        }
        break;
      case "ArrowDown":
        {
          arrowAtArea(3);
        }
        break;
    }
  }  
  if (reset) switchKeyboard();
}

/* function clk(key, Code) {
    var event = new KeyboardEvent("keydown", { bubbles: true, "key": key, "code": Code });
    KINPUT.focus();
    KINPUT.dispatchEvent(event);
}
 */
function insertAtArea(text) {
  KINPUT.focus();
  let posStart = KINPUT.selectionStart;
  let posEnd = KINPUT.selectionEnd;
  let front = KINPUT.value.substring(0, posStart);
  let back = KINPUT.value.substring(posEnd, KINPUT.value.length);
  KINPUT.value = front + text + back;
  KINPUT.selectionStart = posStart + text.length;
  KINPUT.selectionEnd = posStart + text.length;
}

function delAtArea(direction) {
  KINPUT.focus();
  let posStart = direction ? KINPUT.selectionStart : KINPUT.selectionStart - 1;
  if (posStart >= 0) {
    KINPUT.value =
      KINPUT.value.substring(0, posStart) +
      KINPUT.value.substring(posStart + 1, KINPUT.value.length);
    KINPUT.selectionStart = posStart;
    KINPUT.selectionEnd = posStart;
  }
}

function arrowAtArea(direction) {
  let posStart = KINPUT.selectionStart;
  let nCols=KINPUT.cols;
  
  switch (direction) {
    case 0:
      if(posStart>=nCols){
        KINPUT.selectionStart = posStart - nCols;
        KINPUT.selectionEnd = posStart - nCols;
      }
      break;
    case 1:
      {
        if (KINPUT.selectionStart > 0) {
          KINPUT.selectionStart = posStart - 1;
          KINPUT.selectionEnd = posStart - 1;
        }
      }
      break;
    case 2:
      {
        if (KINPUT.selectionStart < KINPUT.value.length - 1) {
          KINPUT.selectionStart = posStart + 1;
          KINPUT.selectionEnd = posStart + 1;
        }
      }
      break;
    case 3:
      if((posStart+nCols)< KINPUT.value.length){
        KINPUT.selectionStart = posStart + nCols;
        KINPUT.selectionEnd = posStart + nCols;
      }
      break;
  }
}

//-----------------------------------------------
function setLocalStorage() {
  localStorage.setItem("stateLng", stateLng);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("stateLng")) {
    stateLng = localStorage.getItem("stateLng") ===  "true" ?true:false;
    switchKeyboard();
  }
}
window.addEventListener("load", getLocalStorage);