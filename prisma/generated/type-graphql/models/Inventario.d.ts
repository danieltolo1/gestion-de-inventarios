import { MovimientoInventario } from "../models/MovimientoInventario";
import { Producto } from "../models/Producto";
import { InventarioCount } from "../resolvers/outputs/InventarioCount";
export declare class Inventario {
    id: string;
    cantidad: number;
    producto?: Producto;
    productoId: string;
    movimientoInventario?: MovimientoInventario[];
    _count?: InventarioCount | null;
}
