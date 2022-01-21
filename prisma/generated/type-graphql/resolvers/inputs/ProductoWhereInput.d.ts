import { InventarioRelationFilter } from "../inputs/InventarioRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductoWhereInput {
    AND?: ProductoWhereInput[] | undefined;
    OR?: ProductoWhereInput[] | undefined;
    NOT?: ProductoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    foto?: StringFilter | undefined;
    inventario?: InventarioRelationFilter | undefined;
}
