import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;