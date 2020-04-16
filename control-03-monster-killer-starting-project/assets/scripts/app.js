/** @format */

const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const BONUS_LIFE_VALUE = 25;


const enteredValue = prompt("Maximum life for you and the monster", "100");

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}


let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

function getBonusLife() {
  return parseInt(bonusLifeEl.innerHTML);
}

function dicreaseBonusLife() {
  const bonusLife = getBonusLife();
  if (bonusLife > 0) {
    let newBonusLife = bonusLife - 1;
    bonusLifeEl.innerHTML = newBonusLife;
  } else {
    bonusLifeEl.innerHTML = 0;
  }
}

function resetBonusLife() {
  bonusLifeEl.innerHTML = 1;
}

adjustHealthBars(chosenMaxLife);

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  bonusLifeTrigger();
  console.log(currentPlayerHealth);
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won !");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost !");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw !");
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
    resetBonusLife();
  }
}

function attackMonster(mode) {
  let maxDamage;

  if (mode === "ATTACK") {
    maxDamage = PLAYER_ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  endRound();
}

// We use __Handler because is attach with event handler
function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal higher than the max chose life");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

function bonusLifeTrigger() {
  const isBonus = checkBonusLife();

  if (currentPlayerHealth >= 0 && currentPlayerHealth < 15 && isBonus) {
    alert("You have use your bonus life !");
    currentPlayerHealth += BONUS_LIFE_VALUE;
    removeBonusLife(currentPlayerHealth);
    dicreaseBonusLife();
  } else if (currentPlayerHealth >= 0 && currentPlayerHealth < 5) {
    alert("You are about to die !");
  }
}

function checkBonusLife() {
  const bonusLife = getBonusLife();

  if (bonusLife > 0) {
    return bonusLife;
  }
  return false;
}

// Perform actions
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
