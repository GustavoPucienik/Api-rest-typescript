import { Request, Response } from "express";
import ProdutoEntity from "../entities/ProdutoEntity";
import ProdutoRepository from "../repositories/ProdutoRepository";
import { TipoRequestBodyProduto, TipoRequestParamsProduto, TipoResponseBodyProduto } from "../tipos/tiposProduto";

export default class ProdutoController {
  constructor(private repository: ProdutoRepository){}

  async criaProduto(
    req: Request<{}, {}, TipoRequestBodyProduto>,
     res: Response<TipoResponseBodyProduto>
  ) {
    const { nome, preco, quantidade, descricao } = <ProdutoEntity>(req.body);

    const novoProduto = new ProdutoEntity(nome, preco, quantidade, descricao);

    await this.repository.criaProduto(novoProduto);
    return res.status(200).json({ dados: {id: novoProduto.id, nome, preco, quantidade} });;
  }

  async listarProdutos(req: Request, res: Response<TipoResponseBodyProduto>) {
    const listaDeProdutos = await this.repository.listarProdutos();

    const dados = listaDeProdutos.map((produto) => {
      return {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: produto.quantidade,
        descricao: produto.descricao !== null ? produto.descricao : undefined,
      };
    });

    return res.status(200).json({dados})
  }

  async atualizaProduto(
    req: Request<TipoRequestParamsProduto, {}, TipoRequestBodyProduto>,
    res: Response<TipoResponseBodyProduto>
  ) {
    const { id } = req.params;
    await this.repository.atualizaProduto(Number(id), req.body as ProdutoEntity);

    return res.sendStatus(204);
  }

  async deletaProduto(
    req: Request<TipoRequestParamsProduto, {}, TipoRequestBodyProduto>,
    res: Response<TipoResponseBodyProduto>
  ) {
    const { id } = req.params;

    await this.repository.deletaProduto(Number(id));

    return res.status(204);
  }

  async buscaProdutoPorCampoGenerico(
    req: Request, res: Response
  ) {
    const { campo, valor } = req.query;

    if (!campo || !valor) {
      return res.status(404).json({"Erro": "Campo e valor são obrigatórios para a pesquisa."});
    }

    const listaDeProdutos = await this.repository.buscaProdutoPorCampoGenerico(campo as keyof ProdutoEntity, valor as string);

    if(!listaDeProdutos){
      return res.status(204).json({"mensagem": "Nenhum produto encontrado."});
    }

    return res.status(200).json(listaDeProdutos);
  }
}