//Atividade 1 Pessoa 
class Pessoa{
    constructor(nome, idade){

    this.nome = nome;
    this.idade = idade; 
} 
    apresentar(){
        console.log (`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
    let pessoa1 = new Pessoa ('João', 18);
    let pessoa2 = new Pessoa ('Mari', 24);

    pessoa1.apresentar();
    pessoa2.apresentar