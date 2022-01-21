import { InventarioCreateNestedOneWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateNestedOneWithoutMovimientoInventarioInput";
import { UsuarioCreateNestedOneWithoutMovimientosInput } from "../inputs/UsuarioCreateNestedOneWithoutMovimientosInput";
export declare class MovimientoInventarioCreateInput {
    id?: string | undefined;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    inventario: InventarioCreateNestedOneWithoutMovimientoInventarioInput;
    usuario?: UsuarioCreateNestedOneWithoutMovimientosInput | undefined;
}
