import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estado } from 'src/entities/estado.entity';
import { Municipio } from 'src/entities/municipio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estado, Municipio])],
  providers: [MunicipiosService],
  controllers: [MunicipiosController]
})
export class MunicipiosModule {}
