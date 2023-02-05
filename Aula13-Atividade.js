let nomeLoja = "Modas";
let sobrenomeLoja = "Fit";
//                  0           1         2       3       4
let Catalogo = ["Conjunto", "Legging", "Short", "Top", "Macacao"];

// Catálogo 
// 1 - Conjunto  ------------- R$ 180,00.
// 2 - Legging --------------- R$ 85,00.
// 3 - Short ----------------- R$ 65,00.
// 4 - Top ------------------- R$ 40,00.
// 5 - Macacao --------------- R$ 95,00.


let Conjunto = 180.00;
let Legging = 85.00;
let Short = 65.00;
let Top = 40.00;
let Macacao = 95.00;

console.log(Catalogo[0]);
console.log(Catalogo[1]);
console.log(Catalogo[2]);
console.log(Catalogo[3]);
console.log(Catalogo[4]);

// Aqui eu criei um array vazio para eu preencher depois com os valores
let pedidoDaDonaDaLoja = [];
console.log("O valor do " + Short);


// Esta função vai adicionar itens ao pedido da dona da loja
function adicionaPeca(item) {
    pedidoDaDonaDaLoja.push(item);
}
Catalogo.push("Camiseta");  // Eu estou adicionando mais um item 
console.log(Catalogo);

Catalogo.pop();
console.log(Catalogo);  // Remover o elemento

console.log(Catalogo.includes(6));
console.log(Catalogo.includes(4));


// Aqui estou adicionando uma peça para a dona da loja 
adicionaPeca(Short);
// Aqui estou imprimindo o Array o pedido da dona da loja para verificar se realmente foi adicionado
console.log(pedidoDaDonaDaLoja); 



// Esta função serve para chamar a dona
function chamaDona (nome) {
    console.log(` Dona ${nome}, a sua peca esta disponivel!`);
    return (` Dona ${nome}, a sua peca esta disponivel!`); 
}

// Esta função serve para mostrar as pecas disponiveis
//function verificaPecaDisponivel() {   

    //for (let indice = 2; indice < Catalogo.length; indice++) {
    //    console.log("Peca " + indice + " está " + pecas[indice] + "."); 
      
    //  }  
    
    //console.log("Esta são as pecas disponiveis na loja!");
//}

function verificarPecaDisponivel() {

    for (let indice = 0; indice <= 4; indice++) {
        console.log(`Chegou as novas pecas ${indice} reposição ${Catalogo[indice]}!`);
}

}
    
console.log("As pecas ja estao disponiveis na loja!");

// Esta função serve para liberar a peca para a dona na loja
function DisponivelPeca(indice, disponivelEstoque) {
    

    if (disponivelEstoque == "esgostada") {
        Peca[indice] = "esgostada";
        console.log("Agora a peca " + indice + " está esgostada!");
    } else if (disponivelEstoque == "está disponivel") {
        Peca[indice] = "está disponivel";
        console.log("Agora a peca " + indice + " está disponivel!");
    } else { 
        console.log("o valor informado é inválido, favor informar 'esgostada' ou 'disponivel'");
    }

}


// Esta função serve para realizar o pagamento
function formaPagamento(pagamento, Dona) { 
    if (pagamento == "debito") {
        console.log("O pagamento efetuado no débito.");
    } else if (pagamento == "credito") {
        console.log("O pagamento efetuado no credito.");
    } else {
        console.log("Pagamento efetuado no PIX" + Dona)
    }
        
}

chamaDona("Julia");
formaPagamento("debito");

// Aqui estou informando que a peca Short Roxo está disponivel
DisponivelPeca(Short, "disponivel");

// Aqui estou verificando quais mesas estão livres ou ocupadas
verificarPecaDisponivel();

// Texto feito com sucesso 