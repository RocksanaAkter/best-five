function common(idValue) {
    const input = document.getElementById(idValue)
    const inputString = input.value;
    const inputFloat = parseFloat(inputString)
    return inputFloat;
}

function commonText(idValue) {
    const input = document.getElementById(idValue)
    const inputString = input.innerText;
    const inputFloat = parseFloat(inputString);
    return inputFloat;

}