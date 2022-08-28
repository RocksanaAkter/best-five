const playerListArray = []
let count = 0;
//step2: add player name to the list 
function playerList(playerName) {

    const tableBody = document.getElementById('table-playerName')
    const tableElementLength = tableBody.children.length
    if (tableElementLength + 1 > 6) {
        alert('You can select only 5 players')
        return;
    }
    else {
        const tr = document.createElement("tr")
        tr.innerHTML = `<th>${count}</th>
    <th>${playerName}</th>`;
        playerListArray.push(playerName);
        tableBody.appendChild(tr);
    }

}

// step1: scan player name
function selectPlayer(element) {
    count++;
    const playerName = element.parentNode.parentNode.children[0].innerText;
    playerList(playerName);
    // button disable 
    if (count < 6) {
        element.setAttribute('disabled', true)
        element.style.background = 'gray';
    }

}


//step3: calculate total player cost
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = common('per-player-cost'); //from common.js file

    const total = perPlayerCost * playerListArray.length;

    const totalPlayerCost = document.getElementById('total-player-cost');

    totalPlayerCost.innerText = total;

})
//step3: calculate total cost
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = common('manager-cost'); //from common.js file
    const coachCost = common('coach-cost'); //from common.js file
    const totalPlayerCost = commonText('total-player-cost')
    const finalCost = managerCost + coachCost + totalPlayerCost;
    const totalCostFild = document.getElementById('total-cost-field');

    totalCostFild.innerText = finalCost
})