import { MovimientoInventarioCreateNestedManyWithoutInventarioInput } from "../inputs/MovimientoInventarioCreateNestedManyWithoutInventarioInput";
export declare class InventarioCreateWithoutProductoInput {
    id?: string | undefined;
    cantidad: number;
    movimientoInventario?: MovimientoInventarioCreateNestedManyWithoutInventarioInput | undefined;
}
