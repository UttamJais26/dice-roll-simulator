const buttonE1 = document.getElementById('rollButton');
const diceE1 = document.getElementById('dice');
const rollHistoryE1 = document.getElementById('rollHistory');  

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFaces = getDiceFace(rollResult);
    diceE1.innerHTML = diceFaces;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryE1.innerHTML = '';
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryE1.appendChild(listItem); // Fixed typo here
    }
}

function getDiceFace(rollResult) {
    switch(rollResult) {
        case 1: return '&#9856;';
        case 2: return '&#9857;';
        case 3: return '&#9858;';
        case 4: return '&#9859;';
        case 5: return '&#9860;';
        case 6: return '&#9861;'; // Fixed HTML entity here
        default: return '';
    }
}

buttonE1.addEventListener('click', () => {
    diceE1.classList.add('roll-animation');
    
    // Call the rollDice function so it actually changes numbers!
    rollDice(); 

    setTimeout(() => {
        diceE1.classList.remove('roll-animation');
    }, 500);
});