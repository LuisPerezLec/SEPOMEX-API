import { Controller, Get, Param } from '@nestjs/common';
import { AsentamientosService } from './asentamientos.service';

@Controller('asentamientos')
export class AsentamientosController {
  constructor(private readonly asentamientosService: AsentamientosService) {}

  @Get(':codigo')
  async getAsentamientos(@Param('codigo') codigo: string) {
    return this.asentamientosService.findByCodigoPostal(codigo);
  }
}
