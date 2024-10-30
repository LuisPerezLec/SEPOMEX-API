import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from '../entities/estado.entity';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>,
  ) {}

  async findAll(): Promise<
    { id_estado: number; descripcion_estado: string; clave_renapo: string }[]
  > {
    const estados = await this.estadoRepository.find();

    return estados.map((estado) => ({
      id_estado: estado.id_estado,
      descripcion_estado: estado.descripcion_estado,
      clave_renapo: estado.clave_renapo,
    }));
  }
}
