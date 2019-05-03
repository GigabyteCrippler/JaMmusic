import '@babel/polyfill';

describe('Google', () => {
  // beforeAll(async () => {
  //   await page.goto('https://google.com');
  // });

  it('should be titled "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'load' });
    await expect(page.title()).resolves.toMatch('Google');
  });
});
