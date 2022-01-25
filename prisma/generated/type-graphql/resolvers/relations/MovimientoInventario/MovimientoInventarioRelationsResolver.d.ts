import { Inventario } from "../../../models/Inventario";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
import { User } from "../../../models/User";
export declare class MovimientoInventarioRelationsResolver {
    inventario(movimientoInventario: MovimientoInventario, ctx: any): Promise<Inventario>;
    usuario(movimientoInventario: MovimientoInventario, ctx: any): Promise<User | null>;
}
