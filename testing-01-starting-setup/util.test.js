// Import function in a constant supported by Jest
const { checkAndGenerate } = require("./util");
const { generateText } = require("./util");

test("Should output name and age", () => {
  const text = generateText("Kev", 27);
  expect(text).toBe("Kev (27 years old)");
});

test("Should generate a valid text output", () => {
  const text = checkAndGenerate("Kev", 27);
  expect(text).toBe("Kev (27 years old)");
});
