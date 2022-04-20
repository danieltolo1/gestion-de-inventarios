import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartComputerUpdateOneWithoutProductInput } from "../inputs/PartComputerUpdateOneWithoutProductInput";
import { StateUpdateOneRequiredWithoutProductInput } from "../inputs/StateUpdateOneRequiredWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutProduct_typeInput {
    internal_code?: StringFieldUpdateOperationsInput | undefined;
    serial_number?: NullableStringFieldUpdateOperationsInput | undefined;
    imei?: NullableStringFieldUpdateOperationsInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
    picture?: NullableStringFieldUpdateOperationsInput | undefined;
    model?: NullableStringFieldUpdateOperationsInput | undefined;
    size?: NullableStringFieldUpdateOperationsInput | undefined;
    tecnology?: NullableStringFieldUpdateOperationsInput | undefined;
    conectivity?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: StateUpdateOneRequiredWithoutProductInput | undefined;
    partcomputer?: PartComputerUpdateOneWithoutProductInput | undefined;
    historial?: StringFieldUpdateOperationsInput | undefined;
}
