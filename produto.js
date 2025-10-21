//Atividade 5 Produto
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  comprar(qtd) {
    if (qtd <= this.estoque) {
      this.estoque -= qtd;
    } else {
      console.log("Estoque insuficiente!");
    }
  }

  repor(qtd) {
    this.estoque += qtd;
  }

  mostrarEstoque() {
    console.log(`O estoque de ${this.nome} é ${this.estoque} unidades.`);
  }
}

const p1 = new Produto("Chocolate", 5.0, 10);
p1.mostrarEstoque();
p1.comprar(3);
p1.mostrarEstoque();
p1.comprar(10); 
p1.repor(5);
p1.mostrarEstoque();
