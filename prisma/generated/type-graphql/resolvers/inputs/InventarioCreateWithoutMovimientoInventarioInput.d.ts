import { ProductoCreateNestedOneWithoutInventarioInput } from "../inputs/ProductoCreateNestedOneWithoutInventarioInput";
export declare class InventarioCreateWithoutMovimientoInventarioInput {
    id?: string | undefined;
    cantidad: number;
    producto: ProductoCreateNestedOneWithoutInventarioInput;
}
