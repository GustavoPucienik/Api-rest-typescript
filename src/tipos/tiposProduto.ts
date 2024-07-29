import ProdutoEntity from "../entities/ProdutoEntity";

type TipoRequestBodyProduto = Omit<ProdutoEntity, "id">;

type TipoRequestParamsProduto = {
  id?:string;
};

type TipoResponseBodyProduto = {
  dados?: 
  | Pick<ProdutoEntity, "id" | "nome" | "preco" | "quantidade" | "descricao">
  | Pick<ProdutoEntity, "id" | "nome" | "preco" | "quantidade" | "descricao">[];
}

export { TipoRequestBodyProduto, TipoResponseBodyProduto, TipoRequestParamsProduto };