import { AccountRepository } from "./account-repository";

export class LoginService {
    accountRepository:AccountRepository;

    constructor(accountRepository:AccountRepository) {
        this.accountRepository = accountRepository;
    }

    connect(user:string, password:string) {
        var lista = this.accountRepository.getLista();
        for (var i = 0; i < lista.length; i++) {
            var a = lista[i];
            if (a.getUser() === user && a.getPassword() === password) {
                if (this.accountRepository.isBloqueado(a) === false) {
                    this.accountRepository.setListaConnects(a);
                    a.setIntentosFallidos(0);
                    return true;
                } 
                else {
                    throw new Error("Usuario bloqueado");
                }
            } else if (a.getUser() === user && !(a.getPassword() === password) && this.accountRepository.isBloqueado(a)===false) {
                a.setIntentosFallidos(a.getIntentosFallidos() + 1);
                if (a.getIntentosFallidos() >= 3) {
                    a.setBloqueado(true);
                }
            }
        }
        return false;
    }

    desconnect(user:string) {
        var lista = this.accountRepository.getListaConnects();
        for (var i = 0; i < lista.length; i++) {
            var a = lista[i];
            if (a.getUser() === user) {
                this.accountRepository.remove(a);
                return true;
            }
        }
        return false;
    }

    isConnect(email:string) {
        var account = this.accountRepository.findAccount(email);
        if(account ===  undefined || account === null)
            return false;
        return true;
    }

    isUserInRole(email:string, id:number) {
        var a = this.accountRepository.findAccount(email);
        return id === this.accountRepository.findRol(a).getIdRol();
    }
}
