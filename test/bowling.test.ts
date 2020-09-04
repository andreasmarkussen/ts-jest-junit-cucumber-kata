import {BowlingGame} from "../src";

const game = new BowlingGame()

test("Example unit test", () => {
  expect(true).toBe(true);
});

test("Gutter Game - 0 points after 1 turn is still 0", () => {
  game.rollPins(0);
  expect(game.getScore()).toBe(0);
});


test("Gutter Game - 0 points in many rolls", () => {
  game.rollPins(0);
  expect(game.getScore()).toBe(0);
});