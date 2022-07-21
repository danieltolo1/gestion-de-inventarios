import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutMaintenanceInput } from "../inputs/ProductUpdateManyWithoutMaintenanceInput";
import { UserUpdateOneRequiredWithoutMantenanceInput } from "../inputs/UserUpdateOneRequiredWithoutMantenanceInput";
export declare class MaintenanceUpdateWithoutComputerInput {
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    jworkerNameFirm?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMantenanceInput | undefined;
    product?: ProductUpdateManyWithoutMaintenanceInput | undefined;
    observation?: NullableStringFieldUpdateOperationsInput | undefined;
}
