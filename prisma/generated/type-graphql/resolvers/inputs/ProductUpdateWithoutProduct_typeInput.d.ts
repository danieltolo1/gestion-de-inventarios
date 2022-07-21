import { LocationUpdateOneRequiredWithoutPorductInput } from "../inputs/LocationUpdateOneRequiredWithoutPorductInput";
import { MaintenanceUpdateManyWithoutProductInput } from "../inputs/MaintenanceUpdateManyWithoutProductInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
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
    location?: LocationUpdateOneRequiredWithoutPorductInput | undefined;
    historial?: StringFieldUpdateOperationsInput | undefined;
    maintenance?: MaintenanceUpdateManyWithoutProductInput | undefined;
}
