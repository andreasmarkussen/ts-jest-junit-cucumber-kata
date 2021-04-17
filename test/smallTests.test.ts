import * as juuxc from "./junit-unXCode";

test("Should be able to remove spaces", () => {
  expect(juuxc.spaceRemover("X Y Z")).toEqual("XYZ");
});

test("Should be able to identify Upper Case strings", () => {
  expect(juuxc.isUpperCase("X")).toBeTruthy();
  expect(juuxc.isUpperCase("x")).not.toBeTruthy();
});
