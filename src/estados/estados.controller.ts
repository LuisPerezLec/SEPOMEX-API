import { Controller, Get } from '@nestjs/common';
import { EstadosService } from '../estados/estados.service';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadoService: EstadosService) {}

  @Get()
  async getAllEstados() {
    return this.estadoService.findAll();
  }
}
