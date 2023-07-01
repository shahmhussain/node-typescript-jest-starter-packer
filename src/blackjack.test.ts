// src/blackjack.test.ts
import { score } from "./blackjack";
describe("blackjack", () => {
  describe("determine the score of a hand", () => {
    it('calculates a score correctly', () => {
      let hand = 2;
      expect(score(hand)).toEqual(2);
    })
  });
});