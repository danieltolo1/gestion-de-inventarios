import { InventarioUpdateOneWithoutProductoInput } from "../inputs/InventarioUpdateOneWithoutProductoInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductoUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    foto?: StringFieldUpdateOperationsInput | undefined;
    inventario?: InventarioUpdateOneWithoutProductoInput | undefined;
}
