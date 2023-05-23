import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

export default Elf;