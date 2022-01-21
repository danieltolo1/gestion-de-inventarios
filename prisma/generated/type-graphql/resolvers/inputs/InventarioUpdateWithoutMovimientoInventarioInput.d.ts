import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductoUpdateOneRequiredWithoutInventarioInput } from "../inputs/ProductoUpdateOneRequiredWithoutInventarioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InventarioUpdateWithoutMovimientoInventarioInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cantidad?: IntFieldUpdateOperationsInput | undefined;
    producto?: ProductoUpdateOneRequiredWithoutInventarioInput | undefined;
}
