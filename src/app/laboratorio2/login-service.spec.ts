import { LoginService } from './login-service';
import { AccountRepository } from './account-repository';
import { instance, mock, reset, when } from 'ts-mockito';
import { Account } from './account';
/*
describe('LoginService', () => {
  let ac:AccountRepository;
  it('should create an instance', () => {
    
    expect(new LoginService(ac)).toBeTruthy();
  });
});*/

describe('LoginService - desconnect', () => {
  let loginService: LoginService;
  let accountRepository: AccountRepository;
  let accountRepositoryMock: AccountRepository;

  beforeEach(() => {
    // Crea un doble de prueba para AccountRepository
    accountRepositoryMock = mock<AccountRepository>();
    accountRepository = instance(accountRepositoryMock);

    // Inicializa el servicio con el doble de prueba
    loginService = new LoginService(accountRepository);
  });

  afterEach(() => {
    // Restablece el comportamiento de los dobles de prueba después de cada prueba
    reset(accountRepositoryMock);
  });

  it('Se desconecta el usuario (TRUE)', () => {
    // Arrange
    const userToDisconnect = new Account();
    userToDisconnect.setUser('usuario');
  
    // Configura el doble de prueba para devolver una lista que contiene la cuenta a desconectar.
    when(accountRepositoryMock.getListaConnects()).thenReturn([userToDisconnect]);
  
    // Act
    const result = loginService.desconnect('usuario');
  
    // Assert
    expect(result).toBe(true, 'Debería devolver verdadero');
  });
  

  //debería devolver falso si el usuario no está conectado
  it('Se esconecta el usuario (FALSE)', () => {
    // Arrange
    // Configura el doble de prueba para devolver una lista vacía, simulando que el usuario no está conectado.
    when(accountRepositoryMock.getListaConnects()).thenReturn([]);

    // Act
    const result = loginService.desconnect('usuario');

    // Assert
    expect(result).toBe(false, 'Debería devolver falso ya que el usuario no estaba conectado');
  });
});
