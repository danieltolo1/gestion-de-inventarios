import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovimientoInventarioUpdateManyWithoutInventarioInput } from "../inputs/MovimientoInventarioUpdateManyWithoutInventarioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InventarioUpdateWithoutProductoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cantidad?: IntFieldUpdateOperationsInput | undefined;
    movimientoInventario?: MovimientoInventarioUpdateManyWithoutInventarioInput | undefined;
}
