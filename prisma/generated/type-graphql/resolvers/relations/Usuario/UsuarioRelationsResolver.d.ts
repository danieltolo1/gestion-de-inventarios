import { MovimientoInventario } from "../../../models/MovimientoInventario";
import { Usuario } from "../../../models/Usuario";
import { UsuarioMovimientosArgs } from "./args/UsuarioMovimientosArgs";
export declare class UsuarioRelationsResolver {
    movimientos(usuario: Usuario, ctx: any, args: UsuarioMovimientosArgs): Promise<MovimientoInventario[]>;
}
