import { Controller, Get, Param } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { Municipio } from 'src/entities/municipio.entity';

@Controller('municipios')
export class MunicipiosController {

    constructor (private readonly municipiosService: MunicipiosService) { }

    @Get(':id_estado')
    async getMunicipios(@Param('id_estado') id_estado: number): Promise<Municipio[]> {
        return this.municipiosService.findMunicipiosByEstado(id_estado);
    }
}
