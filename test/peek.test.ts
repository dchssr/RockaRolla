import { Stack } from "../lib/stack";

test("Top of the stack is 3", () => {
    let stack = new Stack(5);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
});

test("Stack should throw on overflow", () => {
    expect(() => {
        let stack = new Stack(2);
        stack.push("almost");
        stack.push("there");
        stack.push("whoops");
    }).toThrow(/stack overflow/);
});
