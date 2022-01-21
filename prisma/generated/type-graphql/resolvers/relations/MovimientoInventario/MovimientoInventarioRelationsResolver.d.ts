import { Inventario } from "../../../models/Inventario";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
import { Usuario } from "../../../models/Usuario";
export declare class MovimientoInventarioRelationsResolver {
    inventario(movimientoInventario: MovimientoInventario, ctx: any): Promise<Inventario>;
    usuario(movimientoInventario: MovimientoInventario, ctx: any): Promise<Usuario | null>;
}
