import { MovimientoInventario } from "../models/MovimientoInventario";
import { UsuarioCount } from "../resolvers/outputs/UsuarioCount";
export declare class Usuario {
    id: string;
    nombre: string;
    correo: string;
    movimientos?: MovimientoInventario[];
    _count?: UsuarioCount | null;
}
