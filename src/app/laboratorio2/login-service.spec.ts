import { LoginService } from './login-service';
import { AccountRepository } from './account-repository';

describe('LoginService', () => {
  let ac:AccountRepository;
  it('should create an instance', () => {
    
    expect(new LoginService(ac)).toBeTruthy();
  });
});
