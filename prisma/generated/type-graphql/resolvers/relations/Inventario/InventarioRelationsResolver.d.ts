import { Inventario } from "../../../models/Inventario";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
import { Producto } from "../../../models/Producto";
import { InventarioMovimientoInventarioArgs } from "./args/InventarioMovimientoInventarioArgs";
export declare class InventarioRelationsResolver {
    producto(inventario: Inventario, ctx: any): Promise<Producto>;
    movimientoInventario(inventario: Inventario, ctx: any, args: InventarioMovimientoInventarioArgs): Promise<MovimientoInventario[]>;
}
