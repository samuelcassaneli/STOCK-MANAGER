// model/Insumo.js
class Insumo {
  constructor(id, nome, descricao, validade, quantidade, unidade_medida, lote, data_entrada, data_saida, fornecedor, custo, responsavel_retirada, cesta_itens) {
    this.id = id;          // Chave única (pode ser gerada automaticamente)
    this.nome = nome;      // Nome do insumo
    this.descricao = descricao;    // Descrição detalhada
    this.validade = validade;  // Data de validade (formato ISO 8601: YYYY-MM-DD)
    this.quantidade = quantidade;    // Quantidade em estoque
    this.unidade_medida = unidade_medida;  // Unidade de medida (ex: Kg, Litros, Unidades)
    this.lote = lote;       // Número do lote
    this.data_entrada = data_entrada;  // Data da entrada no estoque (YYYY-MM-DD)
    this.data_saida = data_saida;      // Data da última saída (YYYY-MM-DD)
    this.fornecedor = fornecedor; // Nome do fornecedor
    this.custo = custo;        // Custo por unidade
    this.responsavel_retirada = responsavel_retirada; // Quem retirou o insumo (campo customizável)
    this.cesta_itens = cesta_itens;  // Lista de IDs de outros insumos (para "cesta")
  }
}
export default Insumo;
