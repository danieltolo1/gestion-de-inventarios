import { InventarioOrderByWithRelationInput } from "../inputs/InventarioOrderByWithRelationInput";
export declare class ProductoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    foto?: "asc" | "desc" | undefined;
    inventario?: InventarioOrderByWithRelationInput | undefined;
}
