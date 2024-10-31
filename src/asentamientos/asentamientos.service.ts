import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asentamiento } from '../entities/asentamiento.entity';
import { CodigoPostal } from '../entities/codigo_postal.entity';
import { Municipio } from '../entities/municipio.entity';
import { Estado } from '../entities/estado.entity';

@Injectable()
export class AsentamientosService {
  constructor(
    @InjectRepository(Asentamiento)
    private readonly asentamientoRepository: Repository<Asentamiento>,
    @InjectRepository(CodigoPostal)
    private readonly codigoPostalRepository: Repository<CodigoPostal>,
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>,
  ) {}

  async findByCodigoPostal(codigo: string) {
    const asentamientos = await this.asentamientoRepository.createQueryBuilder('asentamiento')
      .innerJoinAndSelect('asentamiento.tipoAsenta', 'tipoAsenta')
      .innerJoinAndSelect('asentamiento.zona', 'zona')
      .innerJoinAndSelect('asentamiento.codigo', 'codigoPostal')
      .innerJoinAndSelect('codigoPostal.municipio', 'municipio')
      .innerJoinAndSelect('municipio.estado', 'estado')
      .where('codigoPostal.codigo_codigo = :codigo', { codigo })
      .getMany();
  
    if (!asentamientos.length) {
      return { municipio: null, estado: null, asentamientos: [] };
    }
  
    // Extraer el municipio y estado de la primera entrada
    const municipio = asentamientos[0].codigo.municipio;
    const estado = municipio.estado;
  
    // Agrupar los asentamientos
    const resultado = {
      id_municipio: municipio.id_municipio,
      id_estado: estado.id_estado,
      asentamientos: asentamientos.map(asentamiento => ({
        id_asentamiento: asentamiento.id_asentamiento,
        descripcion_tipo_asenta: asentamiento.tipoAsenta.descripcion_tipo_asenta,
        descripcion_zona: asentamiento.zona.descripcion_zona,
        descripcion_asentamiento: asentamiento.descripcion_asentamiento,
        codigo_codigo: asentamiento.codigo.codigo_codigo,
      })),
    };
  
    return resultado;
  }
}
