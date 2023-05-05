import Archetype from './Archetypes/Archetype';
import Mage from './Archetypes/Mage';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    const specialStrength = this._strength * 2;
    enemy.receiveDamage(specialStrength);
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}