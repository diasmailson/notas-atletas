class NotasAtletas {
  static atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88],
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33],
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8],
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5],
    },
  ];

  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }

  calculaMedia() {
    const notasOrdenadas = this.notas.sort();

    notasOrdenadas.shift();
    notasOrdenadas.pop();

    const soma = notasOrdenadas.reduce(
      (acumulador, nota) => acumulador + nota,
      0
    );

    return (soma / notasOrdenadas.length).toFixed(6);
  }

  exibirDados() {
    return `
        Atleta: ${this.nome} 
        Notas Obtidas: ${this.notas.join(", ")} 
        Média Válida: ${this.calculaMedia()}
        `;
  }
}

for (let i = 0; i < NotasAtletas.atletas.length; i++) {
  const atleta = NotasAtletas.atletas[i];
  const competidor = new NotasAtletas(atleta.nome, atleta.notas);
  console.log(competidor.exibirDados());
}
