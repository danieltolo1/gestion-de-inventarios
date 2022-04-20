import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SoftwareComputerUpdateOneRequiredWithoutComputerInput } from "../inputs/SoftwareComputerUpdateOneRequiredWithoutComputerInput";
import { StateUpdateOneRequiredWithoutComputerInput } from "../inputs/StateUpdateOneRequiredWithoutComputerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ComputerUpdateWithoutPartComputerInput {
    buy_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    price?: NullableFloatFieldUpdateOperationsInput | undefined;
    internal_code?: StringFieldUpdateOperationsInput | undefined;
    serial_number?: StringFieldUpdateOperationsInput | undefined;
    memory?: StringFieldUpdateOperationsInput | undefined;
    hard_disk?: StringFieldUpdateOperationsInput | undefined;
    processor?: StringFieldUpdateOperationsInput | undefined;
    optical_unit?: NullableBoolFieldUpdateOperationsInput | undefined;
    model?: StringFieldUpdateOperationsInput | undefined;
    state?: StateUpdateOneRequiredWithoutComputerInput | undefined;
    softwarecomputer?: SoftwareComputerUpdateOneRequiredWithoutComputerInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
    historial?: NullableStringFieldUpdateOperationsInput | undefined;
}
