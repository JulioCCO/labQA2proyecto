import { Account } from './account';
import { AccountRepository } from './account-repository';
import { Rol } from './rol';

export class FakeAccountRepository implements AccountRepository {



  listaAccounts: Account[] = []; // Tienen todas las cuentas
  listaConnects: Account[] = []; // Tienen las cuentas que estan conectadas

  getLista(): Account[] {
    throw new Error('Method not implemented.');
  }
  save(cuenta: Account): void {
    throw new Error('Method not implemented.');
  }
  getListaConnects(): Account[] {
    return this.listaConnects;
  }
  setListaConnects(cuenta: Account): void {
    throw new Error('Method not implemented.');
  }

  findAccount(email: string): any {
    for (let i = 0; i < this.listaAccounts.length; i++) {
      const element = this.listaAccounts[i];
      if (element.email === email) {
        return element;
      }
    }
    return null;
  }

  findRol(cuenta: Account): Rol {
    throw new Error('Method not implemented.');
  }

  isBloqueado(cuenta: Account): boolean {
    throw new Error('Method not implemented.');
  }

  remove(cuenta: Account): void {
    let listaTemp: Account[] = [];
    for (let i = 0; i < this.listaAccounts.length; i++) {
      const element = this.listaAccounts[i];
      if (element.email === cuenta.email) {
      } else {
        listaTemp.push(element);
      }
    }
    this.listaAccounts = [];
    this.listaAccounts = listaTemp;
  }
}
