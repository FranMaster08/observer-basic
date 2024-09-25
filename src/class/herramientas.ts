import { ISuscriptor } from "src/interface/suscriptor";

export class Herramienta implements ISuscriptor {

    constructor(public readonly peso: string,
        public readonly nombre: string,
        public readonly color: string,
    ) { }
    public notify: (mensaje: string) => void = (mensaje: string) => {

    }
    public listen: (mensaje: string) => void = (mensaje: string) => {
        console.log(  `Se escucho desde la herramienta ${this.nombre} mensaje : ${mensaje} `);
        console.log(`---------------------------`);

    }
    public realizarAccion: (mensaje: string) => string = (mensaje: string) => {
        return `La herramienta con nombre ${this.nombre} esta realizando la accion de ${mensaje}`
    }
}


