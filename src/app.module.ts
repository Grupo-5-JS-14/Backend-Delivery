import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ // configuracao do banco de dados.
      type: 'mysql', // tipo do banco de dados
      host: 'localhost', // aqui é host da banco de dados
      port: 3306, // a porta do banco de dados
      username: 'root', // usuario de voces.
      password: '110294', // senha do banco de dados de vcs
      database: 'db_vitarun', // nome do banco de dados do vittarum. (ps Eu esqueci um t peço perdao.)
      entities: [],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
