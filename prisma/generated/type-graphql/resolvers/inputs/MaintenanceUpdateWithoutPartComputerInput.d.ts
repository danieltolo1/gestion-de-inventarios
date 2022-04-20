import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMantenanceInput } from "../inputs/UserUpdateOneRequiredWithoutMantenanceInput";
export declare class MaintenanceUpdateWithoutPartComputerInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMantenanceInput | undefined;
}
