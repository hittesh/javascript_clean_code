import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>composistion vs inhertiance</h1>
<div>
read the code carefully and do not forget to chekout the console for better understanding
 for more you can follow @conding_verse
</div>
`;

class Monster {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} can walk`);
  }

  attack() {
    console.log(`${this.name} can attack`);
  }
}

class SwimMonster extends Monster {
  swim() {
    console.log(`${this.name} can swim`);
  }
}

class FlewMonster extends Monster {
  fly() {
    console.log(`${this.name} can flew`);
  }
}

const monster = new Monster("throg");
monster.walk();
monster.attack();

const water_monster = new SwimMonster("bulbasor");
water_monster.attack();
water_monster.swim();

const sky_monster = new FlewMonster("Charzard");
sky_monster.attack();
sky_monster.fly();

/** now we gonna create a monstar that can fly and swim both
 * this where  inheritance is not good solution to doing it
 *
 */

//** compositions allows you to write flexible code using just function you can do whatever you want, composition allow us to give us get rid of inheritance just pure functions there. you can create any function you want  */
function walk_and_attack({ name }) {
  return {
    walk: () => console.log(`${name} can walk`),
    attack: () => console.log(`${name} can attack`)
  };
}

function new_fly_monster({ name }) {
  return {
    fly: () => console.log(`${name} can flew`)
  };
}

function new_swim_moster({ name }) {
  return {
    swim: () => console.log(`${name} can swim`)
  };
}

function new_genius_moster({ name }) {
  return {
    logical_think: () => console.log(`${name} can think stragically`)
  };
}

function create_new_super_hero(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...walk_and_attack(monster),
    ...new_fly_monster(monster),
    ...new_swim_moster(monster),
    ...new_genius_moster(monster)
  };
}

const Thor = create_new_super_hero("Thor");
Thor.walk();
Thor.fly();
Thor.logical_think();

const AquaMan = create_new_super_hero("AquaMan");
AquaMan.walk();
AquaMan.swim();
