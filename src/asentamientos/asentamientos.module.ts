import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsentamientosService } from './asentamientos.service';
import { AsentamientosController } from './asentamientos.controller';
import { Asentamiento } from 'src/entities/asentamiento.entity';
import { CodigoPostal } from 'src/entities/codigo_postal.entity';
import { Municipio } from 'src/entities/municipio.entity';
import { Estado } from 'src/entities/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asentamiento, CodigoPostal, Municipio, Estado])],
  providers: [AsentamientosService],
  controllers: [AsentamientosController]
})
export class AsentamientosModule {}
