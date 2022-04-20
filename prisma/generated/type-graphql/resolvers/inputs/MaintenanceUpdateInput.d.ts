import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartComputerUpdateManyWithoutMaintenanceInput } from "../inputs/PartComputerUpdateManyWithoutMaintenanceInput";
import { UserUpdateOneRequiredWithoutMantenanceInput } from "../inputs/UserUpdateOneRequiredWithoutMantenanceInput";
export declare class MaintenanceUpdateInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMantenanceInput | undefined;
    partComputer?: PartComputerUpdateManyWithoutMaintenanceInput | undefined;
}
