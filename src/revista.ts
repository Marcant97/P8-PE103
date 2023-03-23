import { Observable } from "./observable";
import { Observer } from "./observer";


/**
 * Clase revista
 */
export class Revista implements Observable {

  private nombre_revista: string;
  private titular_revista: string;
  private numero_edicion: number;
  private precio: number;
  private observers: Observer[] = [];

  /**
   * Constructor por defecto
   * @param nombre_revista_ Nombre de la revista
   * @param titular_revista_ Titular de la revista
   * @param numero_edicion_ Numero edicion
   * @param precio_ precio de la revista
   */
  constructor(nombre_revista_: string, titular_revista_: string, numero_edicion_: number, precio_: number) {
    this.nombre_revista = nombre_revista_;
    this.titular_revista = titular_revista_;
    this.numero_edicion = numero_edicion_;
    this.precio = precio_;
  }

  /**
   * getter nombre
   */
  get getNombreRevista(): string {
    return this.nombre_revista;
  }

  /**
   * setter nombre
   */
  set setNombreRevista(nombre_revista_: string) {
    this.nombre_revista = nombre_revista_;
  }

  /**
   * getter titular
   */
  get getTitularRevista(): string {
    return this.titular_revista;
  }

  /**
   * setter titular
   */
  set setNombreTitular(titular_revista_: string) {
    this.titular_revista = titular_revista_;
  }

  /**
   * getter numero edicion
   */
  get getNumeroEdicion(): number {
    return this.numero_edicion;
  }

  /**
   * setter numero edicion
   */
  set setNumeroEdicion(numero_edicion_: number) {
    this.numero_edicion = numero_edicion_;
  }

  /**
   * getter precio
   */
  get getPrecio(): number {
    return this.precio;
  }

  /**
   * setter precio
   */
  set setPrecio(precio_: number) {
    this.precio = precio_;
  }


  /**
   * metodo para sucribirse
   * @param observer observador que se va suscribir
   * @returns cadena con resultado
   */
  public subscribe(observer: Observer): string {
    if (this.observers.includes(observer)) {
     return "Este usuario ya estaba suscrito!";
    }
    else {
      this.observers.push(observer);
      return "Suscripción realizada con éxito!";
    }
  }

  /**
   * método para cancelar suscripcion
   * @param observer observador a cancelar su suscripcion
   * @returns cadena con resultado
   */
  public unsubscribe(observer: Observer): string {
    const index = this.observers.indexOf(observer);
    if(index === -1) {
      return "Este usuario no estaba suscrito!";
    }
    else {
      this.observers.splice(index, 1);
      return "Suscripción cancelada con éxito!";
    }
  }

  /**
   * método que notifica a los suscriptores de una edicion de la revista.
   */
  public notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}