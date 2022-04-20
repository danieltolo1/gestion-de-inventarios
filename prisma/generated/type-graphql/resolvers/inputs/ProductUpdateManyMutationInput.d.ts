import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateManyMutationInput {
    internal_code?: StringFieldUpdateOperationsInput | undefined;
    serial_number?: NullableStringFieldUpdateOperationsInput | undefined;
    imei?: NullableStringFieldUpdateOperationsInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
    picture?: NullableStringFieldUpdateOperationsInput | undefined;
    model?: NullableStringFieldUpdateOperationsInput | undefined;
    size?: NullableStringFieldUpdateOperationsInput | undefined;
    tecnology?: NullableStringFieldUpdateOperationsInput | undefined;
    conectivity?: NullableStringFieldUpdateOperationsInput | undefined;
    historial?: StringFieldUpdateOperationsInput | undefined;
}
