import { IntFilter } from "../inputs/IntFilter";
import { MovimientoInventarioListRelationFilter } from "../inputs/MovimientoInventarioListRelationFilter";
import { ProductoRelationFilter } from "../inputs/ProductoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class InventarioWhereInput {
    AND?: InventarioWhereInput[] | undefined;
    OR?: InventarioWhereInput[] | undefined;
    NOT?: InventarioWhereInput[] | undefined;
    id?: StringFilter | undefined;
    cantidad?: IntFilter | undefined;
    producto?: ProductoRelationFilter | undefined;
    productoId?: StringFilter | undefined;
    movimientoInventario?: MovimientoInventarioListRelationFilter | undefined;
}
