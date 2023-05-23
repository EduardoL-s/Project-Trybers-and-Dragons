import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
    this._energytype = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energytype;
  }

  public static createdArchetypeInstances() {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;