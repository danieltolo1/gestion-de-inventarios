import { ComputerUpdateOneRequiredWithoutMaintenanceInput } from "../inputs/ComputerUpdateOneRequiredWithoutMaintenanceInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutMaintenanceInput } from "../inputs/ProductUpdateManyWithoutMaintenanceInput";
import { UserUpdateOneRequiredWithoutMantenanceInput } from "../inputs/UserUpdateOneRequiredWithoutMantenanceInput";
export declare class MaintenanceUpdateInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMantenanceInput | undefined;
    computer?: ComputerUpdateOneRequiredWithoutMaintenanceInput | undefined;
    product?: ProductUpdateManyWithoutMaintenanceInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
}
