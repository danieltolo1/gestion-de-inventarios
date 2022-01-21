import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_TipoMovimientoFieldUpdateOperationsInput } from "../inputs/EnumEnum_TipoMovimientoFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InventarioUpdateOneRequiredWithoutMovimientoInventarioInput } from "../inputs/InventarioUpdateOneRequiredWithoutMovimientoInventarioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MovimientoInventarioUpdateWithoutUsuarioInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cantidad?: IntFieldUpdateOperationsInput | undefined;
    tipoMovimiento?: EnumEnum_TipoMovimientoFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    inventario?: InventarioUpdateOneRequiredWithoutMovimientoInventarioInput | undefined;
}
