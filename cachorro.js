//Atividade 4 Cachorro
class Cachorro {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }

  latir() {
    console.log(`Au au! Eu sou o ${this.nome}, da raça ${this.raca}.`);
  }
}
const cc1 = new Cachorro("Rex", "Labrador");
const cc2 = new Cachorro("Bolinha", "Poodle");
const cc3 = new Cachorro("Thor", "Vira-lata");

cc1.latir();
cc2.latir();
cc3.latir();
