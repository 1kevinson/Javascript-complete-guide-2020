/** @format */

const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const BONUS_LIFE_VALUE = 25;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];

function getMaxLifeValues() {
  const enteredValue = prompt("Maximum life for you and the monster", 100);
  const chosenMaxLife = parseInt(enteredValue);

  if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    throw { message: "Invalid user inout, not a number!" };
  }
  return chosenMaxLife;
}

let parsedMaxLife;

try {
  parsedMaxLife = getMaxLifeValues();
} catch (error) {
  throw error.message
} finally {
  //Everything here happens despite the error message
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

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry;

  logEntry = {
    event: ev,
    value: val,
    target: "MONSTER",
    finalMonsterHealth: monsterHealth,
    finalePlayerHealth: playerHealth,
  };

  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "PLAYER ";
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry.target = "";
      break;
    default:
      logEntry = {};
      break;
  }

  battleLog.push(logEntry);
}

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  bonusLifeTrigger();

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won !");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON !",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost !");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON !",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw !");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW !",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
    resetBonusLife();
  }
}

function attackMonster(mode) {
  let maxDamage =
    mode === MODE_ATTACK ? PLAYER_ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  writeToLog(logEvent, maxDamage, currentMonsterHealth, currentPlayerHealth);
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
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
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

function printLogHandler() {
  console.log(battleLog);

  let j = 0;
  outerWhile: do {
    //Assign label to a loop
    console.log("Outer", j);
    innerFor: for (let k = 0; k < 5; k++) {
      if (k === 3) {
        break outerWhile; // Call label to break that loop
      }
      console.log("Inner", k);
    }
    j++;
  } while (j < 4);
}

// Perform actions
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
