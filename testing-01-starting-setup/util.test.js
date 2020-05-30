// Import function in a constant supported by Jest
const { generateText } = require("./util");

test("Should output name and age", () => {
  const text = generateText("Kev", 27);
  expect(text).toBe("Kev (27 years old)");
});

test("Should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
