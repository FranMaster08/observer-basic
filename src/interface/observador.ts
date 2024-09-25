import { ISuscriptor } from "./suscriptor";

export interface IObserver {
    suscriptores: Array<ISuscriptor>
    addSuscriptores: (suscriptor: ISuscriptor) => boolean
    removeSuscriptores: (nombre: string) => boolean
    notification: (message: string) => void
}