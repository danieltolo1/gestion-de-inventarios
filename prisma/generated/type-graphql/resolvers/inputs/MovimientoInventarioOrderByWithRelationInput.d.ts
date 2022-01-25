import { InventarioOrderByWithRelationInput } from "../inputs/InventarioOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class MovimientoInventarioOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    inventario?: InventarioOrderByWithRelationInput | undefined;
    inventarioId?: "asc" | "desc" | undefined;
    cantidad?: "asc" | "desc" | undefined;
    tipoMovimiento?: "asc" | "desc" | undefined;
    fecha?: "asc" | "desc" | undefined;
    usuario?: UserOrderByWithRelationInput | undefined;
    usuarioId?: "asc" | "desc" | undefined;
}
