import { InventarioCreateNestedOneWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateNestedOneWithoutMovimientoInventarioInput";
export declare class MovimientoInventarioCreateWithoutUsuarioInput {
    id?: string | undefined;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    inventario: InventarioCreateNestedOneWithoutMovimientoInventarioInput;
}
