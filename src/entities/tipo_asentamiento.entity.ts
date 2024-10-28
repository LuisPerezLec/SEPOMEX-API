import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asentamiento } from './asentamiento.entity';

@Entity('tipo_asentamiento')
export class TipoAsentamiento {
    @PrimaryGeneratedColumn()
    id_tipo_asenta: number;

    @Column({ unique: true, nullable: true })
    codigo_tipo_asenta: string;

    @Column({ nullable: true })
    descripcion_tipo_asenta: string;

    @OneToMany(() => Asentamiento, asentamiento => asentamiento.tipoAsenta)
    asentamientos: Asentamiento[];
    
}
