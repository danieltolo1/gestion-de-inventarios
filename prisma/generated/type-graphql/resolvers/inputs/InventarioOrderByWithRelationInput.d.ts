import { MovimientoInventarioOrderByRelationAggregateInput } from "../inputs/MovimientoInventarioOrderByRelationAggregateInput";
import { ProductoOrderByWithRelationInput } from "../inputs/ProductoOrderByWithRelationInput";
export declare class InventarioOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    cantidad?: "asc" | "desc" | undefined;
    producto?: ProductoOrderByWithRelationInput | undefined;
    productoId?: "asc" | "desc" | undefined;
    movimientoInventario?: MovimientoInventarioOrderByRelationAggregateInput | undefined;
}
