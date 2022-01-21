import { MovimientoInventarioCreateNestedManyWithoutInventarioInput } from "../inputs/MovimientoInventarioCreateNestedManyWithoutInventarioInput";
import { ProductoCreateNestedOneWithoutInventarioInput } from "../inputs/ProductoCreateNestedOneWithoutInventarioInput";
export declare class InventarioCreateInput {
    id?: string | undefined;
    cantidad: number;
    producto: ProductoCreateNestedOneWithoutInventarioInput;
    movimientoInventario?: MovimientoInventarioCreateNestedManyWithoutInventarioInput | undefined;
}
