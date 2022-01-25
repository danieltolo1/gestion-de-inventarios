import { Inventario } from "../models/Inventario";
import { User } from "../models/User";
export declare class MovimientoInventario {
    id: string;
    inventario?: Inventario;
    inventarioId: string;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuario?: User | null;
    usuarioId?: string | null;
}
