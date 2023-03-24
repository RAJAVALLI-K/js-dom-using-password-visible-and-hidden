let containerDiv = document.querySelector('.container');
let inputEle = document.createElement('input');
inputEle.className = "values";
inputEle.type = "password";
containerDiv.appendChild(inputEle);

let checkBox = document.createElement('input');
checkBox.className = "checkbox";
checkBox.type = "checkbox";
containerDiv.appendChild(checkBox);

let spanEle = document.createElement('span');
spanEle.className = "text-content";
spanEle.innerText = "ShowPassword";
containerDiv.appendChild(spanEle);

checkBox.addEventListener("click", checkPassword);
function checkPassword() {
    let inputValue = document.querySelector(".values");
    if (inputValue.type == "password") {
        inputValue.type = "text";
    }
    else {
        inputValue.type = "password";
    }

}