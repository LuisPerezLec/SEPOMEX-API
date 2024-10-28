import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Municipio } from './municipio.entity';
import { Asentamiento } from './asentamiento.entity';

@Entity('codigo_postal')
export class CodigoPostal {
    @PrimaryGeneratedColumn()
    id_codigo: number;

    @Column({ unique: true, nullable: true })
    codigo_codigo: string;

    @ManyToOne(() => Municipio, municipio => municipio.codigo_postales, { nullable: false })
    @JoinColumn({ name: 'id_municipio' }) // Especifica la columna de la FK
    municipio: Municipio;

    @OneToMany(() => Asentamiento, asentamiento => asentamiento.codigo)
    asentamientos: Asentamiento[];
}
