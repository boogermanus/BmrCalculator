import { GenderConstants } from './gender-constants';

describe('GenderConstants', () => {
  it('should create an instance', () => {
    expect(new GenderConstants()).toBeTruthy();
  });

  it('should have static property genders', () => {
    expect(GenderConstants.genders).toBeTruthy();
  });
});
