import { Herramienta } from "./class/herramientas";
import { HerramientasObserver } from "./class/herramientas.observer";

const observador = new HerramientasObserver();

const herramienta1 = new Herramienta("10kg", "Martillo Neumatico", "Metal")
const herramienta2 = new Herramienta("15kg", "Martillo Pesado", "Metal")
// const herramienta3 = new Herramienta("1kg", "Martillo Liviano", "Metal")

// herramienta1.realizarAccion("Golpea")
// herramienta2.realizarAccion("Limpia")
// herramienta3.realizarAccion("correr")


observador.addSuscriptores(herramienta1)
observador.addSuscriptores(herramienta2)
// observador.addSuscriptores(herramienta3)


observador.notification(herramienta1.realizarAccion("Golpea"))

observador.removeSuscriptores('Martillo Neumatico')
// observador.addSuscriptores(herramienta3)

observador.notification(herramienta2.realizarAccion("Trabaja"))