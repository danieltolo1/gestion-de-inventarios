import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_TipoMovimientoFieldUpdateOperationsInput } from "../inputs/EnumEnum_TipoMovimientoFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutMovimientosInput } from "../inputs/UserUpdateOneWithoutMovimientosInput";
export declare class MovimientoInventarioUpdateWithoutInventarioInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cantidad?: IntFieldUpdateOperationsInput | undefined;
    tipoMovimiento?: EnumEnum_TipoMovimientoFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    usuario?: UserUpdateOneWithoutMovimientosInput | undefined;
}
