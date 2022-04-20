import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartComputerUpdateOneWithoutProductInput } from "../inputs/PartComputerUpdateOneWithoutProductInput";
import { Product_TypeUpdateOneRequiredWithoutProductInput } from "../inputs/Product_TypeUpdateOneRequiredWithoutProductInput";
import { StateUpdateOneRequiredWithoutProductInput } from "../inputs/StateUpdateOneRequiredWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateInput {
    internal_code?: StringFieldUpdateOperationsInput | undefined;
    serial_number?: NullableStringFieldUpdateOperationsInput | undefined;
    imei?: NullableStringFieldUpdateOperationsInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
    picture?: NullableStringFieldUpdateOperationsInput | undefined;
    model?: NullableStringFieldUpdateOperationsInput | undefined;
    product_type?: Product_TypeUpdateOneRequiredWithoutProductInput | undefined;
    size?: NullableStringFieldUpdateOperationsInput | undefined;
    tecnology?: NullableStringFieldUpdateOperationsInput | undefined;
    conectivity?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: StateUpdateOneRequiredWithoutProductInput | undefined;
    partcomputer?: PartComputerUpdateOneWithoutProductInput | undefined;
    historial?: StringFieldUpdateOperationsInput | undefined;
}
