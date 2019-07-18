import "core-js/stable";
import "regenerator-runtime/runtime";

describe("Originals", () => {
  it('should be titled "Originals | Web Jam LLC"', async () => {
    await page.goto("http://localhost:7000/music/originals", {
      waitUntil: "load"
    });
    await expect(page.title()).resolves.toMatch("Originals | Web Jam LLC");
  });
});
