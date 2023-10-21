import { Rol } from './rol';

describe('Rol', () => {
  it('should create an instance', () => {
    expect(new Rol("descricion",true,1)).toBeTruthy();
  });
});
