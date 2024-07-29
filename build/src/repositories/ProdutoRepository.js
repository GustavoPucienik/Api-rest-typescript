"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const manipulaErros_1 = require("../utils/manipulaErros");
class ProdutoRepository {
    constructor(ProdutoRepository) {
        this.produtoRepository = ProdutoRepository;
    }
    criaProduto(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.produtoRepository.save(produto);
        });
    }
    listarProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.find();
        });
    }
    atualizaProduto(id, produto) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoAtualizar = yield this.produtoRepository.findOne({ where: { id } });
            if (!produtoAtualizar) {
                throw new manipulaErros_1.NaoEncontrado("Produto não encontrado");
            }
            Object.assign(produtoAtualizar, produto);
            yield this.produtoRepository.save(produtoAtualizar);
            return { success: true };
        });
    }
    deletaProduto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRemovido = yield this.produtoRepository.findOne({ where: { id } });
            if (!produtoRemovido) {
                throw new manipulaErros_1.NaoEncontrado("Produto não encontrado");
            }
            yield this.produtoRepository.remove(produtoRemovido);
            return { success: true };
        });
    }
    buscaProdutoPorCampoGenerico(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtos = yield this.produtoRepository.find({
                where: { [campo]: valor }
            });
            if (produtos.length === 0) {
                throw new manipulaErros_1.NaoEncontrado("Produtos não encontrados");
            }
            return produtos;
        });
    }
}
exports.default = ProdutoRepository;
