import ProdutoEntity from "../../entities/ProdutoEntity";

export default interface InterfaceProdutoRepository {
  criaProduto(produto: ProdutoEntity): void | Promise<void>;
  listarProdutos(): Array<ProdutoEntity> | Promise<ProdutoEntity[]>;
  atualizaProduto(id:number, produto: ProdutoEntity) : void;
  deletaProduto(id: number): void;

  buscaProdutoPorCampoGenerico<Tipo extends keyof ProdutoEntity>(
    campo: Tipo,
    valor: ProdutoEntity[Tipo]
  ): Promise<ProdutoEntity[]>;
}