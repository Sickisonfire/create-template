import { add } from './index';
describe('index test suite', () => {
  it('should add 1+2 =3', () => {
    const a = 1;
    const b = 2;
    const res = 3;

    expect(add(a, b)).toBe(res);
  });
});
