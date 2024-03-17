class Mercado {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    porte() {
        console.log("Pequeno");
    }
}


class MiniMercado extends Mercado {
    constructor(nome, endereco, cidade) {
        super(nome, endereco);
        this.cidade = cidade;
    }
    
    detalhes() {
        console.log(`Nome: ${this.nome}, Endereço: ${this.endereco}, Cidade: ${this.cidade}`);
    }
}

class Supermercado extends Mercado {
    constructor(nome, endereco, cidade, tamanho) {
        super(nome, endereco);
        this.cidade = cidade;
        this.tamanho = tamanho;
    }
    
    porte() {
        console.log("Grande");
    }

    detalhes() {
        console.log(`Nome: ${this.nome}, Endereço: ${this.endereco}, Cidade: ${this.cidade}, Tamanho: ${this.tamanho}`);
    }
}


const mercado = new MiniMercado("Mini-Mercado do dia", "Rua 1 quadra 2", "Brasília");

mercado.porte(); 
mercado.detalhes(); 

const supermercado1 = new Supermercado("Supermercado XYZ", "Rua ABC, 123", "Brasília", "Grande Porte");

supermercado1.porte(); 
supermercado1.detalhes();
