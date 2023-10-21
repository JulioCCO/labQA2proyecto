import { Account } from "./account";
import { Rol } from "./rol";

export interface AccountRepository {
    getLista():Array<Account>;//DEVUELVE EL ARRAYLIST DE ACCOUNT QUE SE LLAMA LISTA
    save(cuenta:Account):void;//GUARDA LAS CUENTAS EN LA VARIABLE LISTA
    getListaConnects():Array<Account>;//DEVUELVE EL ARRAYLIST DE ACCOUNT QUE SE LLAMA LISTACONNECTS
    setListaConnects(cuenta:Account):void;//GUARDA LAS CUENTAS EN LA VARIABLE LISTACONNECTS
    findAccount(email:string):Account;//RETORNA LA CUENTA ASOCIADA AL CORREO
    findRol(cuenta:Account):Rol;//DEVUELVE UN OBJETO DE TIPO ROL
    isBloqueado(cuenta:Account):boolean;//DEVUELVE UN BOOLEAN
    remove(cuenta:Account):void;//REMUEVE LA CUENTA DE LISTACONNECTS
}
