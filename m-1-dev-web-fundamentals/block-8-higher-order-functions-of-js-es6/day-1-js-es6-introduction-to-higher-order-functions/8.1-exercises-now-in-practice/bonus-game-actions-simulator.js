const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const dmgDragon = (dragon) => Math.round(Math.random() * 15) + dragon.strength;

const dmgWarrior = (warrior) => Math.round(Math.random() * warrior.strength) + warrior.strength;

const dmgMage = (mage) => {
  if(mage.mana < 15) { return mage.mana + ' Não possui mana suficiente' }
  const dmg = Math.round(Math.random() * mage.intelligence) + mage.intelligence;
  mage.mana -= 15;   
  return dmgMana = {
    dano: dmg,
    mana: mage.mana
  }
}

const gameActions = {
  warriorTurn: (dmgWarrior) => {
    const damageWarrior = dmgWarrior(warrior);
    dragon.healthPoints -= damageWarrior;
    warrior.damage = damageWarrior;
  },
  mageTurn: (dmgMage) => {
    const damageMage = dmgMage(mage);
    dragon.healthPoints -= damageMage.dano;
    mage.damage = damageMage.dano;
  },
  dragonTurn: (dmgDragon) => {
    const damageDragon = dmgDragon(dragon);
    mage.healthPoints -= damageDragon;
    warrior.healthPoints -= damageDragon;
    dragon.damage = damageDragon;
  },
  battle: () => battleMembers,
};
let endBattle = false;
while(!endBattle) {
  if(warrior.healthPoints > 0) gameActions.warriorTurn(dmgWarrior);
  if(mage.healthPoints > 0) gameActions.mageTurn(dmgMage);
  if(dragon.healthPoints > 0) gameActions.dragonTurn(dmgDragon);
  if((warrior.healthPoints <= 0 && mage.healthPoints <= 0) || dragon.healthPoints <= 0) {
    endBattle = true;
  }
  /* console.log(gameActions.battle()); */
  console.table({warrior, mage, dragon});
}
