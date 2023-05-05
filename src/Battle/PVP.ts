import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private player1: Fighter,
    private player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    for (let i = 100; i > -1; i -= 1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
      if (this.player1.lifePoints === -1 || this.player2.lifePoints === -1) {
        i = -2;
      }
    }
    return super.fight();
  }
}