import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PartComputerUpdateManyWithoutMaintenanceInput } from "../inputs/PartComputerUpdateManyWithoutMaintenanceInput";
export declare class MaintenanceUpdateWithoutUserInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    partComputer?: PartComputerUpdateManyWithoutMaintenanceInput | undefined;
}
