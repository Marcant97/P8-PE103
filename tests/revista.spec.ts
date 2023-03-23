import 'mocha';
import {expect} from 'chai';
import {Revista} from "../src/revista"
import {Suscriptor} from "../src/suscriptor"


describe("Tests revista", () => {

  it("getter y setter", () => {
    expect(revista1.getNombreRevista).to.eq("revista 1");
    expect(revista1.getTitularRevista).to.eq("Atracan a Bizarrap");
    expect(revista1.getPrecio).to.eq(3.50);
    expect(revista1.getNumeroEdicion).to.eq(4);
    revista1.setNombreRevista = "HOLA";
    revista1.setNombreTitular = "Nueva pareja de ronaldo";
    revista1.setNumeroEdicion = 10;
    revista1.setPrecio = 5;
    expect(revista1.getNombreRevista).to.eq("HOLA");
    expect(revista1.getTitularRevista).to.eq("Nueva pareja de ronaldo");
    expect(revista1.getPrecio).to.eq(5);
    expect(revista1.getNumeroEdicion).to.eq(10);
  });

  it("suscribe", () => {
    expect(revista1.subscribe(manuel)).to.eq("Suscripción realizada con éxito!");
    expect(revista1.subscribe(manuel)).to.eq("Este usuario ya estaba suscrito!");
    expect(revista2.subscribe(isabel)).to.eq("Suscripción realizada con éxito!");

  });

  it("unsuscribe", () => {
    expect(revista1.unsubscribe(julian)).to.eq("Este usuario no estaba suscrito!");
    expect(revista1.unsubscribe(manuel)).to.eq("Suscripción cancelada con éxito!");
  });
});


const revista1 = new Revista("revista 1", "Atracan a Bizarrap", 4, 3.50);
const revista2 = new Revista("national geographic", "la selva", 45, 5.99);

const manuel = new Suscriptor("Manuel", "masculino", 40, "Tenerife");
const isabel = new Suscriptor("Isabel", "femenino", 29, "madrid");
const julian = new Suscriptor("Julian", "masculino", 32, "El Hierro");
