let containerDiv = document.querySelector('.container');
let inputEle = document.createElement('input');
inputEle.className = "values";
inputEle.type = "password";
containerDiv.appendChild(inputEle);

let div = document.createElement('div');
div.className = "row";
containerDiv.appendChild(div);

// let checkBox = document.createElement('input');
// checkBox.className = "checkbox";
// checkBox.type = "checkbox";
// div.appendChild(checkBox);

let icon = document.createElement('i');
icon.setAttribute("class","fa fa-eye");
containerDiv.appendChild(icon);

// let spanEle = document.createElement('span');
// spanEle.className = "text-content";
// spanEle.innerText = "ShowPassword";
// div.appendChild(spanEle);

icon.addEventListener("click", checkPassword);
function checkPassword() {
    let inputValue = document.querySelector(".values");
    if (inputValue.type == "password") {
        inputValue.type = "text";
    }
    else {
        inputValue.type = "password";
    }

}