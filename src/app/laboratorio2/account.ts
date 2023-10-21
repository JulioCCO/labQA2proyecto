import { Rol } from "./rol";

export class Account {
    email:string;
    user:string;
    password:string;
    fullname:string;
    rol:Rol | null;
    intentosFallidos:number;
    bloqueado:boolean;

    constructor() {
        this.email = "";
        this.user = "";
        this.password = "";
        this.fullname = "";
        this.rol = null;//OBJETO DE TIPO ROL
        this.intentosFallidos = 0;
        this.bloqueado = false;
    }

    getIntentosFallidos() :number{
        return this.intentosFallidos;
    }

    getBloqueado() :boolean{
        return this.bloqueado;
    }

    getRol() :Rol | null{
        return this.rol;
    }

    getEmail() :string{
        return this.email;
    }

    getUser() :string{
        return this.user;
    }

    getPassword():string {
        return this.password;
    }

    getFullname() :string{
        return this.fullname;
    }

    setIntentosFallidos(intentosFallidos:number) {
        this.intentosFallidos = intentosFallidos;
    }

    setBloqueado(bloqueado:boolean) {
        this.bloqueado = bloqueado;
    }

    setRol(rol:Rol) {
        this.rol = rol;
    }

    setEmail(email:string) {
        if (this.checkEmail(email)) {
            this.email = email;
        } else {
            throw new Error("El formato del correo es incorrecto");
        }
    }

    setUser(user:string) {
        this.user = user;
    }

    setPassword(password:string) {
        if (this.validatePassword(password)) {
            this.password = password;
        }
    }

    setFullname(fullname:string) {
        this.fullname = fullname;
    }

    checkEmail(email:string) {
        return typeof email ==='string' && /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(email);
    }

    tieneNumeros(texto:string) {
        var numeros = "0123456789";
        for (var i = 0; i < texto.length; i++) {
            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    }

    tieneLetras(texto:string) {
        var numeros = "abcdefghyjklmnñopqrstuvwxyz";
        for (var i = 0; i < texto.length; i++) {
            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    }

    tieneLetraMayuscula(texto:string) {
        var numeros = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
        for (var i = 0; i < texto.length; i++) {
            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    }

    tieneCaracteresEspeciales(texto:string) {
        var numeros = "!@#$%^&*";
        for (var i = 0; i < texto.length; i++) {
            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    }

    /*El password debe tener al menos 10 caracteres, formado por números, letras mayúsculas y minúsculas*/
    validatePassword(pas1:string) :boolean{
        if (pas1.length < 10) {
            throw new Error("La contraseña necesita al menos 10 caracteres");
        }
        else if (!this.tieneNumeros(pas1)) {
            throw new Error("La contraseña debe tener al menos un número");
        }
        else if (!this.tieneLetras(pas1)) {
            throw new Error("La contraseña debe tener al menos una letra minúscula");
        }
        else if (!this.tieneLetraMayuscula(pas1)) {
            throw new Error("La contraseña debe tener al menos una letra en mayúscula");
        }
        else if (this.tieneCaracteresEspeciales(pas1)) {
            throw new Error("La contraseña no puede contener caracteres especiales");
        }
        else {
            return true;
        }

        return false;
    }
}
