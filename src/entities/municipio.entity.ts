import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estado } from './estado.entity';
import { CodigoPostal } from './codigo_postal.entity';

@Entity('municipio')
export class Municipio {
    @PrimaryGeneratedColumn()
    id_municipio: number;

    @Column({ nullable: true })
    codigo_municipio: string;

    @Column({ nullable: true })
    descripcion_municipio: string;

    @OneToMany(() => CodigoPostal, codigoPostal => codigoPostal.municipio)
    codigo_postales: CodigoPostal[];

    @ManyToOne(() => Estado, estado => estado.municipios, { nullable: false })
    @JoinColumn({ name: 'id_estado' }) // Especifica la columna de la FK
    estado: Estado;
}
