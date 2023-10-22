import { FakeAccountRepository } from './fake-account-repository';

describe('FakeAccountRepository', () => {
  it('should create an instance', () => {
    expect(new FakeAccountRepository()).toBeTruthy();
  });
});
