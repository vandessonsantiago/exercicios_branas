class Lancamento {

    constructor(categoria, tipo, valor, idLancamento) {
        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lançamento Inválido: Tipo deve ser receita ou despesa")
        }
        if (valor <=0) {
            throw new Error("Lançamento Inválido: valor deve ser maior que zero")
        }
        if (categoria === "") {
            throw new Error("Lançamento Inválido: A categoria é obrigatoria")
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
        this.idLancamento = idLancamento;
    }

    getValorString () {
    
        // operador ternário
        return (this.tipo === "despesa") ? this.valor * -1 : this.valor;
        
        
    }

}

