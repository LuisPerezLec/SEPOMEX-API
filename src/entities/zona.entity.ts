import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asentamiento } from './asentamiento.entity';

@Entity('zona')
export class Zona {
    @PrimaryGeneratedColumn()
    id_zona: number;

    @Column({ unique: true, nullable: true })
    descripcion_zona: string;

    @OneToMany(() => Asentamiento, asentamiento => asentamiento.zona)
    asentamientos: Asentamiento[];
}
