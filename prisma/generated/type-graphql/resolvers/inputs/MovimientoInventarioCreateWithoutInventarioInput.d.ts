import { UserCreateNestedOneWithoutMovimientosInput } from "../inputs/UserCreateNestedOneWithoutMovimientosInput";
export declare class MovimientoInventarioCreateWithoutInventarioInput {
    id?: string | undefined;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuario?: UserCreateNestedOneWithoutMovimientosInput | undefined;
}
