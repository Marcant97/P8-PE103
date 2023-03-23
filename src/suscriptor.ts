
import { Observer } from "./observer";
import { Observable } from "./observable";
import {Genero} from "./types";
import { Revista } from "./revista";

/**
 * Clase suscriptor
 */
export class Suscriptor implements Observer {

  private nombre: string;
  private genero: Genero;
  private edad: number;
  private ubicacion: string;

  /**
   * Constructor por defecto
   * @param nombre_ nombre
   * @param genero_ genero
   * @param edad_ edad
   * @param ubicacion_ lugar de residencia
   */
  constructor(nombre_: string, genero_: Genero, edad_: number, ubicacion_: string) {
    this.nombre = nombre_;
    this.genero = genero_;
    this.edad = edad_;
    this.ubicacion = ubicacion_;
  }

  /**
   * getter nombre
   */
  get getNombre(): string {
    return this.nombre;
  }
  /**
   * setter nombre
   */
  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  /**
   * getter genero
   */
  get getGenero(): Genero {
    return this.genero;
  }

  /**
   * setter genero
   */
  set setGenero(genero_: Genero) {
    this.genero = genero_;
  }

  /**
   * getter edad
   */
  get getEdad(): number {
    return this.edad;
  }

  /**
   * setter edad
   */
  set setEdad(edad_: number) {
    this.edad = edad_;
  }

  /**
   * getter ubicacion
   */
  get getUbicacion(): string {
    return this.ubicacion;
  }

  /**
   * setter ubicacion
   */
  set setUbicacion(ubicacion_: string) {
    this.ubicacion = ubicacion_;
  }

  /**
   * Método update
   * @param observable objeto observable del que le ha llegado la notificacion
   * @returns cadena con el resultado o undefined.
   */
  public update(observable: Observable): string | undefined {
    let aux: string;
    if (observable instanceof Revista) {
      aux = `Soy ${this.nombre} y me ha llegado una notificacion de la revista ${observable.getNombreRevista}`;
      return aux;
    }
    return undefined;
  }
}