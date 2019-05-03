import '@babel/polyfill';

describe('Homepage', () => {
  // beforeAll(async () => {
  //   await page.goto('https://google.com');
  // });

  it('should be titled correctly', async () => {
    await page.goto('http://localhost:7878/music', { waitUntil: 'load' });
    await expect(page.title()).resolves.toMatch('Music | Web Jam LLC');
  });
  it('should goto subroute', async () => {
    await page.goto('http://localhost:7878/music/buymusic', { waitUntil: 'load' });
    await expect(page.title()).resolves.toMatch('Buy Music | Web Jam LLC');
  });
});
