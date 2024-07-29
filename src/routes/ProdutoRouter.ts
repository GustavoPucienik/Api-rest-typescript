import express, { RequestHandler } from "express";
import ProdutoController from "../controller/ProdutoController";
import ProdutoRepository from "../repositories/ProdutoRepository";
import { AppDataSource } from "../config/dataSource";
import { middlewareValidadorBodyProduto } from "../middleware/validadores/ProdutoRequestBody"
import { verificaIdMiddleware } from "../middleware/verificaIdMiddleware";
import ProdutoEntity from "../entities/ProdutoEntity";

const router = express.Router();

const produtoRepository = new ProdutoRepository(AppDataSource.getRepository(ProdutoEntity));
const produtoController = new ProdutoController(produtoRepository);

const validarBodyProduto: RequestHandler = (req, res, next) => 
  middlewareValidadorBodyProduto(req, res, next)

router.get("/", (req, res) => produtoController.listarProdutos(req, res))
  .get("/filtro", (req, res) => produtoController.buscaProdutoPorCampoGenerico(req, res))
  .post("/", validarBodyProduto , (req, res) => produtoController.criaProduto(req, res))
  .put("/:id", verificaIdMiddleware, (req, res) => produtoController.atualizaProduto(req,res))
  .delete("/:id", verificaIdMiddleware, (req, res) => produtoController.deletaProduto(req,res));

export default router;