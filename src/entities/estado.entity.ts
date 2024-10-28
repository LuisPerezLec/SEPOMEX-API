import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Municipio } from './municipio.entity';
import { Ciudad } from './ciudad.entity';

@Entity('estado')
export class Estado {
    @PrimaryGeneratedColumn()
    id_estado: number;

    @Column({ type: 'varchar', length: 10, unique: true })
    codigo_estado: string;

    @Column({ type: 'varchar', length: 10, unique: true })
    clave_renapo: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    descripcion_estado: string;

    @OneToMany(() => Municipio, municipio => municipio.estado)
    municipios: Municipio[];

    @OneToMany(() => Ciudad, ciudad => ciudad.estado)
    ciudades: Ciudad[];
}
