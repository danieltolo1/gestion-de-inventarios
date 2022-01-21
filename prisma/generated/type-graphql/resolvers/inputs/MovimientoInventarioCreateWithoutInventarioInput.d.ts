import { UsuarioCreateNestedOneWithoutMovimientosInput } from "../inputs/UsuarioCreateNestedOneWithoutMovimientosInput";
export declare class MovimientoInventarioCreateWithoutInventarioInput {
    id?: string | undefined;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuario?: UsuarioCreateNestedOneWithoutMovimientosInput | undefined;
}
