import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
    this._energytype = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energytype;
  }

  public static createdArchetypeInstances() {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;