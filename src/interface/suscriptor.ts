export interface ISuscriptor {
    nombre: string;
    notify: (mensaje: string) => void;
    listen: (mensaje: string) => void;
}