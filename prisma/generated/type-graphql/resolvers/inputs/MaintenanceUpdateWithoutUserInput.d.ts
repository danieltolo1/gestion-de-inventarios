import { ComputerUpdateOneRequiredWithoutMaintenanceInput } from "../inputs/ComputerUpdateOneRequiredWithoutMaintenanceInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutMaintenanceInput } from "../inputs/ProductUpdateManyWithoutMaintenanceInput";
export declare class MaintenanceUpdateWithoutUserInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    computer?: ComputerUpdateOneRequiredWithoutMaintenanceInput | undefined;
    product?: ProductUpdateManyWithoutMaintenanceInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
}
