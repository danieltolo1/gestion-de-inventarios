import { InventarioCreateNestedOneWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateNestedOneWithoutMovimientoInventarioInput";
import { UserCreateNestedOneWithoutMovimientosInput } from "../inputs/UserCreateNestedOneWithoutMovimientosInput";
export declare class MovimientoInventarioCreateInput {
    id?: string | undefined;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    inventario: InventarioCreateNestedOneWithoutMovimientoInventarioInput;
    usuario?: UserCreateNestedOneWithoutMovimientosInput | undefined;
}
