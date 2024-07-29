"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProdutoController_1 = __importDefault(require("../controller/ProdutoController"));
const ProdutoRepository_1 = __importDefault(require("../repositories/ProdutoRepository"));
const dataSource_1 = require("../config/dataSource");
const ProdutoRequestBody_1 = require("../middleware/validadores/ProdutoRequestBody");
const verificaIdMiddleware_1 = require("../middleware/verificaIdMiddleware");
const ProdutoEntity_1 = __importDefault(require("../entities/ProdutoEntity"));
const router = express_1.default.Router();
const produtoRepository = new ProdutoRepository_1.default(dataSource_1.AppDataSource.getRepository(ProdutoEntity_1.default));
const produtoController = new ProdutoController_1.default(produtoRepository);
const validarBodyProduto = (req, res, next) => (0, ProdutoRequestBody_1.middlewareValidadorBodyProduto)(req, res, next);
router.get("/", (req, res) => produtoController.listarProdutos(req, res))
    .get("/filtro", (req, res) => produtoController.buscaProdutoPorCampoGenerico(req, res))
    .post("/", validarBodyProduto, (req, res) => produtoController.criaProduto(req, res))
    .put("/:id", verificaIdMiddleware_1.verificaIdMiddleware, (req, res) => produtoController.atualizaProduto(req, res))
    .delete("/:id", verificaIdMiddleware_1.verificaIdMiddleware, (req, res) => produtoController.deletaProduto(req, res));
exports.default = router;
