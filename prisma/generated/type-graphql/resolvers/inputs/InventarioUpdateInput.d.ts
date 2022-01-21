import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovimientoInventarioUpdateManyWithoutInventarioInput } from "../inputs/MovimientoInventarioUpdateManyWithoutInventarioInput";
import { ProductoUpdateOneRequiredWithoutInventarioInput } from "../inputs/ProductoUpdateOneRequiredWithoutInventarioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InventarioUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cantidad?: IntFieldUpdateOperationsInput | undefined;
    producto?: ProductoUpdateOneRequiredWithoutInventarioInput | undefined;
    movimientoInventario?: MovimientoInventarioUpdateManyWithoutInventarioInput | undefined;
}
