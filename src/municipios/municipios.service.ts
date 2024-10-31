import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from 'src/entities/estado.entity';
import { Municipio } from 'src/entities/municipio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipiosService {
    constructor(
        @InjectRepository(Estado)
        private readonly estadoRepository: Repository<Estado>,
        @InjectRepository(Municipio)
        private readonly municipioRepository: Repository<Municipio>,
      ) {}
    
      async findMunicipiosByEstado(id_estado: number): Promise<Municipio[]> {
        return await this.municipioRepository.find({
            where: { estado: { id_estado } },
            relations: ['estado'], // Cargar relación si es necesario
        });
    }
}
