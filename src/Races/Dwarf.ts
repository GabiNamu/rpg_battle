import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}