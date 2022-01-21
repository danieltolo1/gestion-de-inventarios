import { MovimientoInventarioUpdateManyWithoutUsuarioInput } from "../inputs/MovimientoInventarioUpdateManyWithoutUsuarioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UsuarioUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    correo?: StringFieldUpdateOperationsInput | undefined;
    movimientos?: MovimientoInventarioUpdateManyWithoutUsuarioInput | undefined;
}
