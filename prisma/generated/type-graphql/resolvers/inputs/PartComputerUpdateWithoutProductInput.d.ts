import { ComputerUpdateOneRequiredWithoutPartComputerInput } from "../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput";
import { LocationUpdateOneRequiredWithoutPartComputerInput } from "../inputs/LocationUpdateOneRequiredWithoutPartComputerInput";
import { MaintenanceUpdateOneRequiredWithoutPartComputerInput } from "../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class PartComputerUpdateWithoutProductInput {
    computer?: ComputerUpdateOneRequiredWithoutPartComputerInput | undefined;
    location?: LocationUpdateOneRequiredWithoutPartComputerInput | undefined;
    maintenance?: MaintenanceUpdateOneRequiredWithoutPartComputerInput | undefined;
    name_part?: NullableStringFieldUpdateOperationsInput | undefined;
}
