import { IsNotEmpty, Length, MaxLength, MinLength } from 'class-validator';
import {  Column,  Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity({ name: 'db_vitarun' }) //Cria uma tabela chamada tb_postagem
export class Loja {
  @PrimaryGeneratedColumn() //cria uma chave primaria e auto increment
  id!: number;

  @IsNotEmpty()
  @Length(3,100)
  @Column({ length: 100, nullable: false })
  nome!: string;
  
  @IsNotEmpty()
  @Column({ length: 1000})
  descricao!: string;
  
  @IsNotEmpty() 
  @Column({nullable:false})
  cnpj!: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  categoria!: string;
  
  @IsNotEmpty()
  @Column({ nullable: false })
  cep!: number;  

}