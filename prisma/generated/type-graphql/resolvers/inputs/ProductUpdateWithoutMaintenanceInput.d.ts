import { LocationUpdateOneRequiredWithoutPorductInput } from "../inputs/LocationUpdateOneRequiredWithoutPorductInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_TypeUpdateOneRequiredWithoutProductInput } from "../inputs/Product_TypeUpdateOneRequiredWithoutProductInput";
import { StateUpdateOneRequiredWithoutProductInput } from "../inputs/StateUpdateOneRequiredWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutMaintenanceInput {
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
    location?: LocationUpdateOneRequiredWithoutPorductInput | undefined;
    historial?: StringFieldUpdateOperationsInput | undefined;
}
