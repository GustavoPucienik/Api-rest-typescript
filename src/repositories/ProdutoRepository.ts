import { Repository } from "typeorm";
import ProdutoEntity from "../entities/ProdutoEntity";
import { NaoEncontrado } from "../utils/manipulaErros";
import InterfaceProdutoRepository from "./interface/InterfaceProdutoRepository";

export default class ProdutoRepository implements InterfaceProdutoRepository{
  private produtoRepository: Repository<ProdutoEntity>

  constructor(ProdutoRepository: Repository<ProdutoEntity>){
    this.produtoRepository = ProdutoRepository;
  }

  async criaProduto(produto:ProdutoEntity): Promise<void> {
    await this.produtoRepository.save(produto);
  }

  async listarProdutos(): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.find();
  }

  async atualizaProduto(id:number, produto:ProdutoEntity) {
    const produtoAtualizar = await this.produtoRepository.findOne({where: {id}});

    if (!produtoAtualizar) {
      throw new NaoEncontrado("Produto não encontrado");
    }

    Object.assign(produtoAtualizar, produto);

    await this.produtoRepository.save(produtoAtualizar);

    return { success: true}
  }

  async deletaProduto(id:number) {
    const produtoRemovido = await this.produtoRepository.findOne({where: {id}});
    
    if (!produtoRemovido) {
      throw new NaoEncontrado("Produto não encontrado");
    }

    await this.produtoRepository.remove(produtoRemovido);

    return {success: true};
  }

  async buscaProdutoPorCampoGenerico<Tipo extends keyof ProdutoEntity>(
    campo: Tipo, valor: ProdutoEntity[Tipo]
  ): Promise<ProdutoEntity[]> {
    const produtos = await this.produtoRepository.find({
      where: { [campo]: valor }
    })

    if (produtos.length === 0) {
      throw new NaoEncontrado("Produtos não encontrados");
    }

    return produtos;
  }

}