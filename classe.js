
var produto1 = {
    nome: "Iphone_15",
    preco: 9000,
    desconto: " ",
    calcularDesconto: function() {
        return this.preco * 0.1;
    }
};


var produto2 = {
    nome: "Samsung Galaxy S24",
    preco: 10000,
    calcularDesconto: function() {
        return this.preco * 0.1;
    }
};

var produto3 = {
    nome: "Tablet Samsung S9",
    preco: 75000,
    calcularDesconto: function() {
        return this.preco * 0.1;
    }
};

class Produto {
    constructor (nome, preco) {
        this.nome = nome;
        this.preco = preco;
    } 
    desconto() {
        return this.preco * 0.1; 
    }

}

function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    

    Produto.call(this, preco);
}


var produto1 = new Produto("Iphone15", 9000);
var produto2 = new Produto("Samsung Galaxy S24", 10000);
var produto3 = new Produto("Tablet Samsung S9", 7500);



console.log(produto1);
console.log(produto1.desconto());
console.log(produto2);
console.log(produto2.desconto());
console.log(produto3);
console.log(produto3.desconto());




