import * as yup from "yup";
import { pt } from "yup-locale-pt";
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";
import { TipoRequestBodyProduto } from "../../tipos/tiposProduto";
import { NextFunction, Request, Response } from "express";

yup.setLocale(pt);

const esquemaBodyProduto : yup.ObjectSchema<
  TipoRequestBodyProduto
> = yup.object({
  nome: yup.string().defined().required(),
  preco: yup.number().defined().required(),
  quantidade: yup.number().defined().required(),
  descricao: yup.string()
})

const middlewareValidadorBodyProduto = async (req: Request, res: Response, next: NextFunction) => {
  tratarErroValidacaoYup(esquemaBodyProduto, req, res, next)
}

export { middlewareValidadorBodyProduto };
