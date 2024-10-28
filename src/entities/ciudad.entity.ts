import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Estado } from './estado.entity';
import { Asentamiento } from './asentamiento.entity';

@Entity('ciudad')
export class Ciudad {
    @PrimaryGeneratedColumn()
    id_ciudad: number;

    @Column({ nullable: true })
    codigo_cve_ciudad: string;

    @Column({ nullable: true })
    descripcion_ciudad: string;

    @OneToMany(() => Asentamiento, asentamiento => asentamiento.ciudad)
    asentamientos: Asentamiento[];

    @ManyToOne(() => Estado, estado => estado.ciudades)
    estado: Estado;
}
