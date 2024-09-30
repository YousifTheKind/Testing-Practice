// to avoid eslint errors
import { describe, expect, test } from "@jest/globals";
import capitalize from "./capitalize";
import { reverseString } from "./reverseString";
import { calculator } from "./calculator";
import { caesarCipher } from "./caesarCipher";
import { analyzeArray } from "./analyzeArray";
test("Capitalization", () => {
    expect(capitalize("james")).toBe("James");
});

test("Reversing", () => {
    expect(reverseString("james")).toBe("semaj");
});
test("Calc", () => {
    expect(calculator.add(5, 3)).toBe(8);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.multiply(5, 3)).toBe(15);
    expect(calculator.divide(5, 3)).toBeCloseTo(1.6666666666666667);
});
test("Caesar Cipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("Analyze Arrays", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
