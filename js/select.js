const playerListArray = [];
function selectPlayer(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    playerListArray.push(playerName);
    console.log(playerListArray);
}