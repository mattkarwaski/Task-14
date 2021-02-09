const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const inputLength = () => {
  return input.value.length;
};

const createDeleteButton = (parent) => {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode("X"));
  button.className = "delete";
  parent.appendChild(button);
};

const toggleDoneClass = () => {
  this.classList.toggle("done");
};

const createListElement = () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  createDeleteButton(li);
  deleteButton = document.querySelectorAll(".delete");

  updateDeleteButtons();

  li.addEventListener("click", toggleDoneClass);

  input.value = "";
};

const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};

const addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
};

const updateDeleteButtons = () => {
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (let i = 0; i < lis.length; i++) {
  li[i].addEventListener("click", toggleDoneClass);

  createDeleteButton(li[i]);
}

deleteButton = document.querySelectorAll(".delete");

updateDeleteButtons();
