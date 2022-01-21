import { InventarioCreateNestedOneWithoutProductoInput } from "../inputs/InventarioCreateNestedOneWithoutProductoInput";
export declare class ProductoCreateInput {
    id?: string | undefined;
    nombre: string;
    foto: string;
    inventario?: InventarioCreateNestedOneWithoutProductoInput | undefined;
}
