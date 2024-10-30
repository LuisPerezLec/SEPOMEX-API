import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsentamientosModule } from './asentamientos/asentamientos.module';
import { Asentamiento } from './entities/asentamiento.entity';
import { Ciudad } from './entities/ciudad.entity';
import { CodigoPostal } from './entities/codigo_postal.entity';
import { Estado } from './entities/estado.entity';
import { Municipio } from './entities/municipio.entity';
import { TipoAsentamiento } from './entities/tipo_asentamiento.entity';
import { Zona } from './entities/zona.entity';
import { EstadosController } from './estados/estados.controller';
import { EstadosService } from './estados/estados.service';
import { EstadosModule } from './estados/estados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      logging: true,
      logger: 'advanced-console',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root_password',
      database: 'sepomex',
      autoLoadEntities: true,
      synchronize: false,
      entities: [Asentamiento, Ciudad, CodigoPostal, Estado, Municipio, TipoAsentamiento, Zona]
    }),
    AsentamientosModule,
    EstadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
