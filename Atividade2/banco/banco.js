const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nome = "Ketlin Bonatto";
const agencia = "1234";
const numeroConta = "56789-0";

let saldo = 1000;

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function menu() {
    console.log("\n==============================");
    console.log("       BANCO DIGITAL");
    console.log("==============================");
    console.log("1 - Consultar dados da conta");
    console.log("2 - Consultar saldo");
    console.log("3 - Realizar débito");
    console.log("4 - Realizar crédito");
    console.log("0 - Sair");
    console.log("==============================");

    rl.question("Digite a opção desejada: ", (opcao) => {

        if (opcao === "1") {
            console.log("\n--- DADOS DA CONTA ---");
            console.log(`Nome: ${nome}`);
            console.log(`Agência: ${agencia}`);
            console.log(`Número da conta: ${numeroConta}`);

            menu();

        } else if (opcao === "2") {
            console.log("\n--- SALDO ---");
            console.log(`Seu saldo atual é de ${formatarMoeda(saldo)}`);

            menu();

        } else if (opcao === "3") {
            rl.question("Digite o valor do débito: R$ ", (resposta) => {

                const valor = parseFloat(resposta);

                if (isNaN(valor) || valor <= 0) {
                    console.log("Valor inválido.");
                } else if (valor > saldo) {
                    console.log("Saldo insuficiente.");
                } else {
                    saldo -= valor;
                    console.log("Débito realizado com sucesso!");
                    console.log(`Novo saldo: ${formatarMoeda(saldo)}`);
                }

                menu();
            });

        } else if (opcao === "4") {
            rl.question("Digite o valor do crédito: R$ ", (resposta) => {

                const valor = parseFloat(resposta);

                if (isNaN(valor) || valor <= 0) {
                    console.log("Valor inválido.");
                } else {
                    saldo += valor;
                    console.log("Crédito realizado com sucesso!");
                    console.log(`Novo saldo: ${formatarMoeda(saldo)}`);
                }

                menu();
            });

        } else if (opcao === "0") {
            console.log("\nObrigado por utilizar o Banco Digital!");
            rl.close();

        } else {
            console.log("Opção inválida.");
            menu();
        }
    });
}

menu();