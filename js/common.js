function common(idValue) {
    const input = document.getElementById(idValue)
    const inputString = input.value;
    const inputFloat = parseFloat(inputString) // convert input field value to float value
    return inputFloat;
}

function commonText(idValue) {
    const input = document.getElementById(idValue)
    const inputString = input.innerText;
    const inputFloat = parseFloat(inputString);//convert innerText to float value
    return inputFloat;

}