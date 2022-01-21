import { Inventario } from "../models/Inventario";
import { Usuario } from "../models/Usuario";
export declare class MovimientoInventario {
    id: string;
    inventario?: Inventario;
    inventarioId: string;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuario?: Usuario | null;
    usuarioId?: string | null;
}
