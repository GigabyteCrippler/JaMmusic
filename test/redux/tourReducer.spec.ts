import reducer from '../../src/redux/reducers/tourReducer';

describe('tour reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '', data: { datetime: '', _id: '' } })).toEqual(
      {
        tour: [],
        tourUpdated: false,
        editTour: {},
      },
    );
  });
  it('handles RESET_TOUR', () => {
    expect(reducer(undefined, { type: 'RESET_TOUR' })).toEqual(
      {
        tour: [],
        tourUpdated: false,
        editTour: {},
      },
    );
  });
  it('handles NEW_TOUR', () => {
    const t1:any = { datetime: `${new Date().toISOString}`, _id: '' };
    const t2:any = { datetime: `${new Date().toISOString}`, _id: '' };
    expect(reducer({ tour: [t1], tourUpdated: true, editTour: {} }, { type: 'NEW_TOUR', data: t2 })).toEqual(
      {
        tour: [t2, t1],
        tourUpdated: true,
        editTour: {},
      },
    );
  });
  it('handles EDIT_TOUR', () => {
    expect(reducer(undefined, { type: 'EDIT_TOUR', data: { _id: '123', datetime: 'string' } })).toEqual(
      {
        tour: [],
        tourUpdated: false,
        editTour: { _id: '123', datetime: 'string' },
      },
    );
  });
  it('handles MODIFY_TOUR', () => {
    expect(reducer({
      tour: [{ _id: '456' }, { _id: '123' }],
      tourUpdated: false,
      editTour: {},
    }, { type: 'UPDATED_TOUR', data: { _id: '123', datetime: 'string' } })).toEqual(
      {
        tour: [{ _id: '456' }, { _id: '123', datetime: 'string' }],
        tourUpdated: true,
        editTour: {},
      },
    );
  });
});
