// Import function in a constant supported by Jest
const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("Should output name and age", () => {
  const text = generateText("Kev", 27);
  expect(text).toBe("Kev (27 years old)");
});

test("Should generate a valid text output", () => {
  const text = checkAndGenerate("Kev", 27);
  expect(text).toBe("Kev (27 years old)");
});

test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slow: 80,
    args: ["--window-size=1820,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:5000/testing-01-starting-setup/");
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "25");
  await page.click("button#btnAddUser");
});
