import { LoginService } from './login-service';
import { instance, mock, reset, when } from 'ts-mockito';
import { Account } from './account';
import { FakeAccountRepository } from './fake-account-repository';

describe('LoginService - desconnect (Usuario Conectado)', () => {
  let loginService: LoginService;
  let accountRepository: FakeAccountRepository;
  let accountRepositoryMock: FakeAccountRepository;
  const userToDisconnect = new Account();

  beforeEach(() => {
    // Crea un doble de prueba para AccountRepository
    accountRepositoryMock = mock<FakeAccountRepository>();
    accountRepository = instance(accountRepositoryMock);

    // Seteado de usuario en lista de conectados
    userToDisconnect.setUser('usuario');
    accountRepository.setListaConnects(userToDisconnect);

    // Inicializa el servicio con el doble de prueba
    loginService = new LoginService(accountRepository);
  });

  it('Se desconecta el usuario (TRUE)', () => {
    // Configura el doble de prueba para devolver una lista que contiene la cuenta a desconectar.
    when(accountRepositoryMock.getListaConnects()).thenReturn([userToDisconnect]);

    // Act
    const result = loginService.desconnect('usuario');

    // Assert
    expect(result).toBe(true, 'Debería devolver verdadero');
  });

  afterEach(() => {
    // Restablece el comportamiento de los dobles de prueba después de cada prueba
    reset(accountRepositoryMock);
  });
});

describe('LoginService - desconnect (Usuario No Conectado)', () => {
  let loginService: LoginService;
  let accountRepository: FakeAccountRepository;
  let accountRepositoryMock: FakeAccountRepository;

  beforeEach(() => {
    // Crea un doble de prueba para AccountRepository
    accountRepositoryMock = mock<FakeAccountRepository>();
    accountRepository = instance(accountRepositoryMock);

    // No se agrega ningún usuario a la lista de conectados en este bloque
    // Inicializa el servicio con el doble de prueba
    loginService = new LoginService(accountRepository);
  });

  // Debería devolver falso si el usuario no está conectado
  it('Se desconecta el usuario (FALSE)', () => {
    // Arrange
    // Configura el doble de prueba para devolver una lista vacía, simulando que el usuario no está conectado.
    when(accountRepositoryMock.getListaConnects()).thenReturn([]);

    // Act
    const result = loginService.desconnect('usuario');

    // Assert
    expect(result).toBe(false, 'Debería devolver falso ya que el usuario no estaba conectado');
  });

  afterEach(() => {
    // Restablece el comportamiento de los dobles de prueba después de cada prueba
    reset(accountRepositoryMock);
  });
});
