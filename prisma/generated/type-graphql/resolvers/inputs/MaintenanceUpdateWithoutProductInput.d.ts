import { ComputerUpdateOneRequiredWithoutMaintenanceInput } from "../inputs/ComputerUpdateOneRequiredWithoutMaintenanceInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMantenanceInput } from "../inputs/UserUpdateOneRequiredWithoutMantenanceInput";
export declare class MaintenanceUpdateWithoutProductInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMantenanceInput | undefined;
    computer?: ComputerUpdateOneRequiredWithoutMaintenanceInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
}
