import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(fighter: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  fight(): number {
    while (this._fighter.lifePoints > 0 && this._monsters
      .some((monster) => monster.lifePoints > 0)) {
      this._monsters.forEach((monster) => {
        if (monster.lifePoints > 0) {
          monster.attack(this._fighter);
          this._fighter.attack(monster);
        }
      });
    }

    return super.fight();
  }
}

export default PVE;