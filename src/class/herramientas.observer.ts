import { IObserver } from "src/interface/observador";
import { ISuscriptor } from "src/interface/suscriptor";

export class HerramientasObserver implements IObserver {
    suscriptores: ISuscriptor[];
    constructor() {
        this.suscriptores = [];
    }
    addSuscriptores: (suscriptor: ISuscriptor) => boolean = (suscript: ISuscriptor) => {
        try {
            this.suscriptores.push(suscript)
            return true;
        } catch (error) {
            console.log('Ocurrion un problema agregando suscriptor');
            throw new Error(error);
        }

    }

    removeSuscriptores: (nombre: string) => boolean =( nombre: string ) =>{
        this.suscriptores.filter(item => nombre !== item.nombre)
        return true;
    }
    notification: (message: string) => void = (message: string) =>{
        this.suscriptores.forEach(item => item.listen(message))
    }

}