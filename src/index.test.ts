import { noBoringZeros } from "./index";
describe("index", () => {
  it("calculates noBoringZeros correctly for 2", () => {
    let hand = 2000;
    expect(noBoringZeros(hand)).toEqual(2);
  });
  it("calculates noBoringZeros correctly for -1050", () => {
    let hand = -1050;
    expect(noBoringZeros(hand)).toEqual(-105);
  });
});
