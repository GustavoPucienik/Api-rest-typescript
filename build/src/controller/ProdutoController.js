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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoEntity_1 = __importDefault(require("../entities/ProdutoEntity"));
class ProdutoController {
    constructor(repository) {
        this.repository = repository;
    }
    criaProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, preco, quantidade, descricao } = (req.body);
            const novoProduto = new ProdutoEntity_1.default(nome, preco, quantidade, descricao);
            yield this.repository.criaProduto(novoProduto);
            return res.status(200).json({ dados: { id: novoProduto.id, nome, preco, quantidade } });
            ;
        });
    }
    listarProdutos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaDeProdutos = yield this.repository.listarProdutos();
            const dados = listaDeProdutos.map((produto) => {
                return {
                    id: produto.id,
                    nome: produto.nome,
                    preco: produto.preco,
                    quantidade: produto.quantidade,
                    descricao: produto.descricao !== null ? produto.descricao : undefined,
                };
            });
            return res.status(200).json({ dados });
        });
    }
    atualizaProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.repository.atualizaProduto(Number(id), req.body);
            return res.sendStatus(204);
        });
    }
    deletaProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.repository.deletaProduto(Number(id));
            return res.status(204);
        });
    }
    buscaProdutoPorCampoGenerico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { campo, valor } = req.query;
            if (!campo || !valor) {
                return res.status(404).json({ "Erro": "Campo e valor são obrigatórios para a pesquisa." });
            }
            const listaDeProdutos = yield this.repository.buscaProdutoPorCampoGenerico(campo, valor);
            if (!listaDeProdutos) {
                return res.status(204).json({ "mensagem": "Nenhum produto encontrado." });
            }
            return res.status(200).json(listaDeProdutos);
        });
    }
}
exports.default = ProdutoController;
