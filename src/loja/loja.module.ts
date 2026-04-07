import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Loja } from "./entitites/loja.entity";
import { LojaService } from "./services/loja.service";
import { LojaController } from "./controller/loja.controller";

 
@Module({
    imports: [TypeOrmModule.forFeature([Loja])], // Importa o Postagem como uma entidade do TypeOrmModule
    providers: [LojaService], //Define a PostagemService como servidor
    controllers: [LojaController], // 
    exports: [TypeOrmModule] // Exporta a TypeOrmModule
})
export class LojaModule {}