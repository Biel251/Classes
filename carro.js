//Atividade 3 Carro
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
  }

  frear() {
    if (this.velocidade >= 10) {
      this.velocidade -= 10;
    } else {
      this.velocidade = 0;
    }
  }

  mostrarVelocidade() {
    console.log(`A velocidade atual do ${this.modelo} é ${this.velocidade} km/h`);
  }
}


const carro1 = new Carro("Fusca");
carro1.acelerar();
carro1.acelerar();
carro1.mostrarVelocidade();
carro1.frear();
carro1.mostrarVelocidade();

