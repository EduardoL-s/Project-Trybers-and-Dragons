import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
    this._energytype = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energytype;
  }

  public static createdArchetypeInstances() {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;