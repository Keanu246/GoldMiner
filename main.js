var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  goldPerClick2Cost: 100,
  goldPerClick3Cost: 2000,
  goldPerClick4Cost: 30000
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost * 1.2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

function buyMiner() {
  if (gameData.gold >= gameData.minerCost) {
    gameData.gold -= gameData.minerCost
    gameData.goldPerSecond += 1
    gameData.minerCost * 1.1
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perSecondUpgrade").innerHTML = "Upgrade Miner (Currently Level " + gameData.goldPerSecond + ") Cost: " + gameData.minerCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 15000)

if (typeof savegame.dwarves !== "undefined") gameData.dwarves = savegame.dwarves;
