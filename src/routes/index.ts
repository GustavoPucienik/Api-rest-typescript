import express from "express";
import produtoRouter from "./ProdutoRouter";

const router = (app: express.Router) => {
  app.use("/produtos", produtoRouter)
}

export default router;