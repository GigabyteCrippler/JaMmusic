import gMapUtils from '../../../src/containers/GoogleMap/gMapUtils';

describe('gMapUtils', () => {
  it('limits latitude when > 83', () => {
    const result = gMapUtils.limitLat({ loc: { lat: 84, lng: -80 } });
    expect(result.loc.lat).toBe(83);
  });
  it('limits latitude when < -70', () => {
    const result = gMapUtils.limitLat({ loc: { lat: -80, lng: -80 } });
    expect(result.loc.lat).toBe(-70);
  });
});