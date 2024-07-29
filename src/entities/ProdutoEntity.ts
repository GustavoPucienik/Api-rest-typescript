import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class ProdutoEntity{
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  preco:number;
  @Column()
  quantidade: number;
  @Column({ nullable: true })
  descricao?: string;

  constructor(nome: string, preco: number, quantidade: number, descricao?: string) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.descricao = descricao;
  }
}