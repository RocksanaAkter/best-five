const playerListArray = [];
//step2: add player name to the list 
function playerList(playerName) {

    const tableBody = document.getElementById('table-playerName')
    tableBody.innerHTML = "";
    for (let i = 0; i < playerName.length; i++) {
        const name = playerListArray[i];

        if (i === 5) {
            alert('you can not select more than 5 players')
            break;
        }
        const tr = document.createElement("tr")
        tr.innerHTML = `<th>${i + 1}</th>
<th>${name}</th>`;
        tableBody.appendChild(tr);
    }


}

// step1: scan player name
function selectPlayer(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    playerListArray.push(playerName);
    playerList(playerListArray);
}

//step3: calculate total player cost
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = common('per-player-cost');

    const total = perPlayerCost * playerListArray.length;

    const totalPlayerCost = document.getElementById('total-player-cost');

    totalPlayerCost.innerText = total;

})
//step3: calculate total cost
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = common('manager-cost');
    const coachCost = common('coach-cost');
    const totalPlayerCost = commonText('total-player-cost')
    const finalCost = managerCost + coachCost + totalPlayerCost;
    const totalCostFild = document.getElementById('total-cost-field');
    totalCostFild.innerText = finalCost
})