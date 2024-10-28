import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CodigoPostal } from './codigo_postal.entity';
import { Ciudad } from './ciudad.entity';
import { TipoAsentamiento } from './tipo_asentamiento.entity';
import { Zona } from './zona.entity';

@Entity('asentamiento')
export class Asentamiento {
    @PrimaryGeneratedColumn()
    id_asentamiento: number;

    @ManyToOne(() => CodigoPostal, codigoPostal => codigoPostal.asentamientos, { nullable: false })
    @JoinColumn({ name: 'id_codigo' }) // Especifica el nombre de la columna de la FK
    codigo: CodigoPostal;

    @ManyToOne(() => Ciudad, ciudad => ciudad.asentamientos, { nullable: false })
    @JoinColumn({ name: 'id_ciudad' }) // Asegúrate de especificar también la FK para ciudad si es necesario
    ciudad: Ciudad;

    @ManyToOne(() => TipoAsentamiento, tipoAsenta => tipoAsenta.asentamientos, { nullable: false })
    @JoinColumn({ name: 'id_tipo_asenta' }) // Especifica el nombre de la columna de la FK
    tipoAsenta: TipoAsentamiento;

    @ManyToOne(() => Zona, zona => zona.asentamientos, { nullable: false })
    @JoinColumn({ name: 'id_zona' }) // Asegúrate de especificar también la FK para zona si es necesario
    zona: Zona;

    @Column({ nullable: true })
    id_asenta_cpcons: string;

    @Column({ nullable: true })
    descripcion_asentamiento: string;
}
