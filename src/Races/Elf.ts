import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}