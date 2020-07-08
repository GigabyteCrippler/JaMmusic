/* eslint-disable class-methods-use-this, max-classes-per-file */

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GoogleMap from '../../../src/containers/GoogleMap';

describe('GoogleMap container', () => {
  let lType = '', wrapper: ShallowWrapper<Readonly<any> & Readonly<{ children?: React.ReactNode; }>, Readonly<any>, GoogleMap>;
  const fakeFunc: any = jest.fn();
  class Marker { addListener(type: string, cb: () => void) { lType = type; cb(); } }
  class InfoWindow { open() { } }
  const fakeMarker: any = Marker;
  const fakeInfoWindow: any = InfoWindow;
  beforeEach(() => {
    global.google = {
      maps: {
        ...window.google.maps,
        Marker: fakeMarker,
        Map: fakeFunc,
        InfoWindow: fakeInfoWindow,
      },
    };
    wrapper = shallow<GoogleMap>(<GoogleMap />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(lType).toBe('click');
  });
});
