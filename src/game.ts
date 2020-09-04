export class BowlingGame{
  score: number = 0 ;

  public rollPins(pinsHit: number) {
    this.score += pinsHit;
  }

  public getScore() {
    return this.score;    
  }
};

