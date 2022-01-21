import { InventarioOrderByWithRelationInput } from "../inputs/InventarioOrderByWithRelationInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
export declare class MovimientoInventarioOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    inventario?: InventarioOrderByWithRelationInput | undefined;
    inventarioId?: "asc" | "desc" | undefined;
    cantidad?: "asc" | "desc" | undefined;
    tipoMovimiento?: "asc" | "desc" | undefined;
    fecha?: "asc" | "desc" | undefined;
    usuario?: UsuarioOrderByWithRelationInput | undefined;
    usuarioId?: "asc" | "desc" | undefined;
}
