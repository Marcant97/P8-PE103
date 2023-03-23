import 'mocha';
import {expect} from 'chai';
import {Suscriptor} from "../src/suscriptor"
import { Revista } from '../src/revista';


describe("Tests Suscriptor", () => {


  it("getter y setter", () => {
    expect(manuel.getNombre).to.eq("manuel");
    expect(manuel.getEdad).to.eq(40);
    expect(manuel.getGenero).to.eq("masculino");
    expect(manuel.getUbicacion).to.eq("Tenerife");
    manuel.setNombre = "Manuel";
    manuel.setEdad = 35;
    manuel.setGenero = "femenino";
    manuel.setUbicacion = "La Laguna";
    expect(manuel.getNombre).to.eq("Manuel");
    expect(manuel.getEdad).to.eq(35);
    expect(manuel.getGenero).to.eq("femenino");
    expect(manuel.getUbicacion).to.eq("La Laguna");

  });

  it("update", () => {
    expect(manuel.update(revista1)).to.eq("Soy Manuel y me ha llegado una notificacion de la revista revista 1");
  });

});

const manuel = new Suscriptor("manuel", "masculino", 40, "Tenerife");
const revista1 = new Revista("revista 1", "Atracan a Bizarrap", 4, 3.50);

revista1.subscribe(manuel);
