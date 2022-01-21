import { MovimientoInventarioCreateNestedManyWithoutUsuarioInput } from "../inputs/MovimientoInventarioCreateNestedManyWithoutUsuarioInput";
export declare class UsuarioCreateInput {
    id?: string | undefined;
    nombre: string;
    correo: string;
    movimientos?: MovimientoInventarioCreateNestedManyWithoutUsuarioInput | undefined;
}
